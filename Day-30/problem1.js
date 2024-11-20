const removeDups = (str) => {
  return str
    .split("")
    .filter((item, index) => index === str.split("").indexOf(item))
    .join("");
};

console.log(removeDups("Okay so the thing is very good"));
