// palindrome

const palindrome = (str) => {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return str === reversedStr;
};

console.log(palindrome("MoM"));

const palindrome1 = (str) => {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString === str;
};

console.log(palindrome2("DaD"));

const palindrome2 = (str) => {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return str === reversedStr;
};

const palindrome3 = (str) => {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return str === reversedStr;
};

const palindrome4 = (str) => {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr === str;
};

const palindrome5 = (str) => {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr === str;
};

const palindrome6 = (str) => {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 1; i--) {
    reversedStr += str[i];
  }

  return reversedStr === str;
};

const palindrome7 = (str) => {
  const reversedStr = "";

  for (let i = str.length; i >= 1; i--) {
    reversedStr += str[i];
  }

  return reversedStr === str;
};

const removeDups3 = (str) => {
  return str
    .split("")
    .filter((item, index) => index === str.index(item))
    .join("");
};
