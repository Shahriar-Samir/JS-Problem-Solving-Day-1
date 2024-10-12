//  remove duplicates

const duplicatesRemove = (nums)=> nums.filter((num,index)=> index===nums.indexOf(num)) 


console.log(duplicatesRemove([12,2,2,2,3,45,65,6,56,547,56,7,56]))