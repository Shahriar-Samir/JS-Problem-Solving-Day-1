// remove duplicates array

const removeDuplicates = (nums=[])=>{
        return nums.filter((item,index)=> index=== nums.indexOf(item))
}

console.log(removeDuplicates([1,2,3,4,5,3,6,7,8,8,9,10]))