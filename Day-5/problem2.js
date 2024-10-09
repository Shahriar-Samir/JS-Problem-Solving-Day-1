
const primeNum = (n)=>{
    if(n<=1){
        return false
    }
    for(let i=2; i<Math.sqrt(n);i++){
        if(Math.sqrt(n)%2!==0) return true 
    }
    return false
}

console.log(primeNum(4))