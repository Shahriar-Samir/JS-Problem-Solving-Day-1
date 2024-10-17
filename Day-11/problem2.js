// intersection

const intersection = (arr,arr2)=> arr.filter(item=> arr2.includes(item)) 

console.log(intersection([1,2,3,4],[2,3,4,5,6]))