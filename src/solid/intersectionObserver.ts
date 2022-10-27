import { onCleanup, untrack, createSignal, createEffect } from "solid-js";
import type { Accessor, Setter } from "solid-js";

// Full Library - https://github.com/solidjs-community/solid-primitives/tree/main/packages

// https://github.com/solidjs-community/solid-primitives/blob/main/packages/intersection-observer/src/index.ts

// **************** Types **************** //

type AddObserver = (el: Element) => void;
type RemoveObserver = (el: Element) => void;
type MaybeAccessor<T> = T | Accessor<T>;
export type MaybeAccessorValue<T extends MaybeAccessor<any>> =
  T extends () => any ? ReturnType<T> : T;
export type VisibilitySetter<Ctx extends {} = {}> = (
  entry: IntersectionObserverEntry,
  context: Ctx & { visible: boolean }
) => boolean;
export type FalsyValue = false | 0 | "" | null | undefined;
export type EntryCallback = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver
) => void;

// **************** Observer **************** //

export const access = <T extends MaybeAccessor<any>>(
  v: T
): MaybeAccessorValue<T> => (typeof v === "function" && !v.length ? v() : v);

export function makeIntersectionObserver(
  elements: Element[],
  onChange: IntersectionObserverCallback,
  options?: IntersectionObserverInit
): {
  add: AddObserver;
  remove: RemoveObserver;
  start: VoidFunction;
  reset: VoidFunction;
  stop: VoidFunction;
  observer: IntersectionObserver;
} {
  const observer = new IntersectionObserver(onChange, options);
  const add: AddObserver = (el) => observer.observe(el);
  const remove: RemoveObserver = (el) => observer.unobserve(el);
  const start = () => elements.forEach(add);
  const stop = () => observer.disconnect();
  const reset = () => observer.takeRecords().forEach((el) => remove(el.target));
  start();
  onCleanup(stop);
  return { add, remove, start, stop, reset, observer };
}

export function createVisibilityObserver(
  options?: IntersectionObserverInit & {
    initialValue?: boolean;
    shouldUnobserve?: boolean;
  },
  setter?: MaybeAccessor<VisibilitySetter>
): (element: MaybeAccessor<Element | FalsyValue>) => Accessor<boolean> {
  const callbacks = new WeakMap<Element, EntryCallback>();

  const { add, remove, stop } = makeIntersectionObserver(
    [],
    (entries, observer) => {
      entries.forEach((entry) =>
        callbacks.get(entry.target)?.(entry, observer)
      );
    },
    options
  );

  function removeEntry(el: Element) {
    remove(el);
    callbacks.delete(el);
  }

  function addEntry(el: Element, callback: EntryCallback) {
    add(el);
    callbacks.set(el, callback);
  }

  const getCallback: (
    get: Accessor<boolean>,
    set: Setter<boolean>
  ) => EntryCallback = setter
    ? (get, set) => {
        const setterRef = access(setter);
        return (entry) =>
          set(
            setterRef(entry, {
              visible: untrack(get),
            })
          );
      }
    : (_, set) => (entry) => {
        if (!options?.shouldUnobserve) {
          set(entry.isIntersecting);
          return;
        }

        if (entry && entry.isIntersecting && options?.shouldUnobserve) {
          set(entry.isIntersecting);
          remove(entry.target);
          return;
        }
      };

  return (element) => {
    const [isVisible, setVisible] = createSignal(
      options?.initialValue ?? false
    );
    const callback = getCallback(isVisible, setVisible);
    let prevEl: Element | FalsyValue;

    if (typeof element === "function") {
      createEffect(() => {
        const el = element();
        if (el === prevEl) return;
        if (prevEl) removeEntry(prevEl);
        if (el) addEntry(el, callback);
        prevEl = el;
      });
    } else if (element) {
      addEntry(element, callback);
    }

    onCleanup(() => {
      if (prevEl) {
        removeEntry(prevEl);
        stop();
      }
    });

    return isVisible;
  };
}
