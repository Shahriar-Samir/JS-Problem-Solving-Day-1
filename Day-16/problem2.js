// anagrams

const angrams = (str1,str2)=>{
    const str1updated = str1.toLowerCase().split('').sort().join('')
    const str2updated = str2.toLowerCase().split('').sort().join('')
    return str1updated === str2updated
}

console.log(angrams('liste','slient'))