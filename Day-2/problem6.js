//  prime number

const checkPrime = (num)=>{
    if(num===(0||1)){
        console.log(false)
    }
    if(num === 2){
        console.log(2)
    }
    else{
        let isPrime = false
        for(let i=2; i<num;i++){
            if(num%i!==0){
                isPrime = true
            }
            else{
                isPrime = false 
                break
            }
        }
        console.log(isPrime)
    }
}

checkPrime(11)