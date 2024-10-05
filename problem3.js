// FizzBuzz

const fizzBuzz = ()=>{
        for(let i=1;i<=100;i++){
                if(i%3===0){
                    console.log('Fizz')
                }
                if(i%5===0){
                    console.log('Buzzz')

                }
                if(i%3===0 || i%5===0){
                    console.log('FuzzBuzz')
                }
                else{
                    console.log(i)
                }
        }
}

console.log(fizzBuzz())