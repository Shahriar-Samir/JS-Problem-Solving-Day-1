//  count vowels


const countVowels = (str)=>{
    return (str.match(/[aeiou]/gi) || []).length  
}

console.log(countVowels('Samir is a good boy'))