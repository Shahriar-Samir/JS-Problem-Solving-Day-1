//  sum of array

const sumOfArray = (nums)=>{
    return nums.reduce((accumulator,current)=> accumulator+current,0)
}

console.log(sumOfArray([1,2,4]))