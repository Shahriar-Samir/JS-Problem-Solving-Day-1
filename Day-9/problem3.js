// remove duplicates

const removeDuplicates = arr=> arr.filter((item,index)=> index===arr.indexOf(item))


console.log(removeDuplicates([1,2,2,2,2,3,4,5,34,543,5,6,6,57,8,9,101,101]))