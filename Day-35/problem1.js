const increment = () => {
  let count = 0;
  function newIncrement() {
    count++;
    return count;
  }
  return newIncrement;
};

const incrementNew = increment();

console.log(incrementNew());
console.log(incrementNew());
console.log(incrementNew());
console.log(incrementNew());

let count1 = 0;

const increment2 = () => {
  count1++;
  return count1;
};

console.log(increment2());
console.log(increment2());
console.log(increment2());
