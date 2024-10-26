// remove duplicates from array

const removeArrayDuplicate = (arr)=> arr.filter((item,index)=> arr.indexOf(item)===index)

console.log(removeArrayDuplicate([1,2,3,3,3,3,3,4,5,6,7,7,8,9]))