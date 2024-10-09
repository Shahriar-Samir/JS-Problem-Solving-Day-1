//  merge two arrays and remove duplicates

const mergeRemoveDuplicates=(arr1,arr2)=> [...arr1,...arr2].filter((item,index)=> [...arr1,...arr2].indexOf(item)===index) 


console.log(mergeRemoveDuplicates([1,2,4,5,6,],[3,4,5,6,7,8]))