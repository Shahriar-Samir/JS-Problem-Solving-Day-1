// factorial 

const factorial = (n)=>{
    let result = 1
    for(let i=1; i<n;i++){
        result+= i*result
    }
    return result
}

console.log(factorial(4))