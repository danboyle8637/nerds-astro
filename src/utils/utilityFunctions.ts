import type { RadioOption } from "../types/forms";

export const updateOptions = (
  optionsArray: RadioOption[],
  value: string
): RadioOption[] => {
  return optionsArray.map((option) => {
    if (option.value === value) {
      option.isChecked = !option.isChecked;
      return option;
    } else if (option.isChecked) {
      option.isChecked = !option.isChecked;
      return option;
    }
    return option;
  });
};

export const capitalizeName = (name: string) => {
  const nameArray = name.split("");
  const firstChar = nameArray.shift()?.toUpperCase();

  if (firstChar) {
    nameArray.unshift(firstChar);
    const cappedName = nameArray.join("");

    return cappedName;
  } else {
    return "";
  }
};
