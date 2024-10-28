// capitalize

const capitalize = str => str.split(' ').map(word=> word.replace(word[0],word[0].toUpperCase())).join(' ')


console.log(capitalize('this is very good'))