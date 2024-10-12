//  palindrome

const palindrome = (str)=> str.split('').reverse().join('') === str? true : false


console.log(palindrome('DaD'))