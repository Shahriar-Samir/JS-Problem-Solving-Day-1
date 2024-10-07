// factorial of  number

const factorialOfNumber = (n)=> n<=1? 1:n*factorialOfNumber(n-1)

console.log(factorialOfNumber(5))