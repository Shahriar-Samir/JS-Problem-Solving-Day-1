//  count vowels 


const vowelsCount = (str)=>{
    const vowels = ['a','e','i','o','u']
    let count = 0
    for(let item of str){
        if(vowels.includes(item)){
            count+=1
        }
    }

    return count
}

console.log(vowelsCount('Samir'))