//  palindrome

const palindrome = (str)=>{
    return str.split('').reverse().join('') === str ? true: false
}


console.log(palindrome('MoM'))