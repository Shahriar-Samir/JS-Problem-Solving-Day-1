// remove duplicates

const removeDuplicates = arr=> arr.filter((item,index)=> index===arr.indexOf(item))

console.log(removeDuplicates([1,2,3,33,3,3,4,5,6,7,8,9,9,99]))