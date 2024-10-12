// remove vowels

const removeVowels = (str)=>{
    const vowels = 'aeiou'
    return str.split('').filter(char=> !vowels.includes(char) && char).join('')
}

console.log(removeVowels('Samirimm'))