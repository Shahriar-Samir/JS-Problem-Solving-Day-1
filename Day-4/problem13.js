//  sort array without sort method

const sortArr = (arr)=>{
    const newArr = []
    for(let i=0;i<=Math.max(...arr);i++){
        if(arr.includes(i)){
            newArr.push(i)
        }
    }
    return newArr
}

console.log(sortArr([5,4,3,1,2]))