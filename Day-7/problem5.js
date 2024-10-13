//  merge array and remove duplicates 

const removeDuplicates = (arr1,arr2)=> [...arr1,...arr2].filter((num,index)=> index===[...arr1,...arr2].indexOf(num))


console.log(removeDuplicates([1,2,3,4,5,6],[3,4,5,6]))

