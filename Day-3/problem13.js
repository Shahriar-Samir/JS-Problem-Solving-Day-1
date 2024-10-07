// sort an array with sort()

const sortArray = (nums)=> nums.sort((a,b)=> b-a)


console.log(sortArray([1,2,3,4,5,6,10]))

// sort an array without sort()

const sortArray2 = (nums)=>{
    for(i=0;i<nums.length;i++){
        for(j=0;j<nums.length-1;j++){
            if(arr[j]>arr[j+1]) [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        }
    }
    return nums
}

console.log([1,2,4,23,5,6])