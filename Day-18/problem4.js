// flat array


const flat = arr => arr.flat(Infinity)

console.log(flat([1,2,3,4,5,6,7,[8,9,[10,[11,12],13,],14],15]))