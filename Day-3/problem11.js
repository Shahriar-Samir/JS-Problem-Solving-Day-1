// character occurrences

const characterOccurrences = (str,char)=>{
        return str.split('').filter(item=> item===char).length
}

console.log(characterOccurrences('Samirii','i'))

// sort version

const occurrences = (str,char)=> str.split(char).length-1

console.log(occurrences('Samirr','i'))