//  prime number

const primeCheck = (n)=>{
     if(n<=0) false 
    for(let i=2; i<=Math.sqrt(n);i++){
        if(n%i===0){
            return false
        }
    }
    return true
} 

console.log(primeCheck(13))