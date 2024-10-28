// fibonacci

const fibonacci = n =>{
    let result = [0,1]
    for(let i=0; i<n;i++){
        result.push(result[result.length-1]+result[result.length-2])
    }
    return result
}

console.log(fibonacci(3))