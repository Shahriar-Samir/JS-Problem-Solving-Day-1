//  fibonacci

const fibonacci = n=>{
    let fib = [0,1]
    while(fib.length < n){
        fib.push(fib[fib.length-1]+fib[fib.length-2])
    }
    return fib.slice(0,n)
}

console.log(fibonacci(6))