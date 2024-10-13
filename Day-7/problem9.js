//  captilaize first letter


const capitalize = (str)=> str.split(' ').map(word=> word.replace(word[0],word[0].toUpperCase())).join(' ')

console.log(capitalize('This is a good thing'))