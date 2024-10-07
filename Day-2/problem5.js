//  sum of array

const sumOfArray = (nums)=>{    
        let sum = 0
        for(let el of nums){
            sum+=el
        }
        return sum
}

console.log(sumOfArray([1,2,4,5,]))