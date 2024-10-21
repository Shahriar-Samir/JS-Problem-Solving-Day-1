// anagrams


const anagrams= (str1,str2)=>{
    const str1u = str1.split('').sort().join('').toLowerCase()
    const str2u = str2.split('').sort().join('').toLowerCase()

    return str1u === str2u
}

console.log(anagrams('slient','liste'))