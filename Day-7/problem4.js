//  remove duplicates


const removeDuplicates = (nums)=> nums.filter((num,index)=> index === nums.indexOf(num))

console.log(removeDuplicates([1,2,3,4,5,6,6,6,6,6,6,6,6,7,7,7,7,8,567,75,67,567,5,34,35435,345345]))