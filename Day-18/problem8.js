//  anagrams

const anagrams = (str1,str2)=>{
    const str1Lower = str1.toLowerCase().split('').sort().join('')
    const str2Lower = str2.toLowerCase().split('').sort().join('')
    return str1Lower === str2Lower
}

console.log(anagrams('Listen','silent'))