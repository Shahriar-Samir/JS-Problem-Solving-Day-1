//  intersection of two arrays (find the common chars between two array or string)

const intersection = (arr1,arr2)=> arr1.concat(arr2).filter((item,index)=> index !== arr1.concat(arr2).indexOf(item))

console.log(intersection([1,2,3,4,5],[1,3,4,5,6,7,8]))

//  second method
const intersection2 = (arr1,arr2)=> arr1.filter(item=> arr2.includes(item))


console.log(intersection2([1,2,3,4,5,6,7],[1,5,6,7,8,9,0,10]))