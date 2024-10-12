//  convert to camel case

const camelCase = (str)=> str.split(' ').map((word,index)=> index===0? word.toLowerCase() : word.replace(word[0],word[0].toUpperCase())).join('')

console.log(camelCase('This is a good thing'))