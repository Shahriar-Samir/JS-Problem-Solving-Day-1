// palindrome

const checkPalindrome = (str)=>{
    return str === str.split('').reverse().join('')? true : false
}

console.log(checkPalindrome('MoM'))