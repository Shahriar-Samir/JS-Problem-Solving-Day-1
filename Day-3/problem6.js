//  prime number 

const primeNumber = (num)=>{
    if(num<=0) return false
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i===0) return false
    }
    return true
}

console.log(primeNumber(9))