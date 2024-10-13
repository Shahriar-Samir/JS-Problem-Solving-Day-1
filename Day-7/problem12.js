// intersection

const intersection = (arr1,arr2)=> arr1.filter(item=> arr2.includes(item))

console.log(intersection([1,2,3,4,5],[3,4,5]))