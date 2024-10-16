//  capitalize 
const capitalize = str => str.split(' ').map((item,index)=> !index? item.toLowerCase() : item.replace(item[0],item[0].toUpperCase()) ).join('')

console.log(capitalize('Samir is a good boy'))