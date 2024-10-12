// merge arrays and remove duplicates

const mergeRemove = (arr1,arr2)=> arr1.concat(arr2).filter((char,index)=> arr1.concat(arr2).indexOf(char)===index)


console.log(mergeRemove([1,23,4,5,6],[3,4,5,6,7,8]))