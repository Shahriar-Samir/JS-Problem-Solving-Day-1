// anagrams

const anagrams = (str1,str2)=> str1.split('').sort().join('') === str2.split('').sort().join('')


console.log(anagrams('silent','listow'))