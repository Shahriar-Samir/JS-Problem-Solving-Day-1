// remove vowels

const removeVowels = (str)=>{
    const vowels = 'aeiou'
    let newStr = ''
    for(let item of str){
        if(vowels.includes(item)){
            continue
        }
        newStr+=item
    }
    return newStr
}


console.log(removeVowels('samir'))