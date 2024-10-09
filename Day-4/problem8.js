const removeDuplicates = (nums)=> nums.filter((item,index)=> nums.indexOf(item)===index)

console.log(removeDuplicates([1,2,2,3,4,5,6,6,7]))