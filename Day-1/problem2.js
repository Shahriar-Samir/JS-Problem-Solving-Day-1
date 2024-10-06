//  check palindrome

const palindromeChecker = (str)=>{
        if(str === str.split('').reverse().join('')){
            return true
        }
 
            return false
 
}


console.log(palindromeChecker('Mom'))
console.log(palindromeChecker('MoM'))