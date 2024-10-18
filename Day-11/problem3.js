// capitalize

const capitalize = (str)=> str.split(' ').map(item=> item.replace(item[0],item[0].toUpperCase())).join(' ')

console.log(capitalize('this is a very good thing'))