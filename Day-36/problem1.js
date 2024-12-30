// reverse

const reverse = (str) => {
  const strToArr = str.split("");
  let newArr = [];
  for (let char of strToArr) {
    newArr.unshift(char);
  }
  return newArr.join("");
};

console.log(reverse("Samir"));
