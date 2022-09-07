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

export function formatPhoneNumber(phoneNumberString: string) {
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  const areaCode = cleaned.match(/^(\d{3})$/);
  const firstThree = cleaned.match(/^(\d{3})$/);
  if (areaCode) {
    return "(" + areaCode[1] + ") ";
  }
  if (firstThree) {
    return firstThree[1];
  }
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
  return null;
}
