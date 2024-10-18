// remove duplicates 

const removeDuplicates = arr=> arr.filter((item,index)=> index===arr.indexOf(item))

console.log(removeDuplicates([1,2,2,23,3,4,5,6,6,6,7,8,9,3,4,5,6]))