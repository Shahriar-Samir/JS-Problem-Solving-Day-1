// prime Number 


const primeNum = (n)=>{
    if(n<=0){
        return false
    }
    for(let i=2; i<=Math.sqrt(n) ;i++){
        if(n%i===0){
            return false
        }
    }
    return true
}

console.log(primeNum(9))