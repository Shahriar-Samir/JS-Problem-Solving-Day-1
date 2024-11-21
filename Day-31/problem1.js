const removeDuplicates = (str) => {
  return str
    .split("")
    .filter((item, index) => (index = str.split("").indexOf(item)));
};
