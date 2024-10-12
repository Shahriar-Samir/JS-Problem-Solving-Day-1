//  capitalize first letter of each word


const capitalize = (str)=> str.split(' ').map(word=> word.replace(word[0],word[0].toUpperCase())).join(' ')

console.log(capitalize('samir is a good boy'))
