// fibbonaci

const fibonacci = (n)=>{
    const nums = [0,1]
    while(nums.length<n){
        nums.push(nums[nums.length-1]+nums[nums.length-2])
    }
    return nums
}

console.log(fibonacci(5))