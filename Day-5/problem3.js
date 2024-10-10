//  palindrome


const palindrome = (str)=> str===str.split('').reverse().join('')? true : false

console.log(palindrome('MoM'))