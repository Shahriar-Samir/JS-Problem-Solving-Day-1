// camelcase


const convertCamelCase= (str)=> str.split(' ').map((word,index)=> index!==0? word.replace(word[0],word[0].toUpperCase()) : word.toLowerCase()).join('')


console.log(convertCamelCase('Samir is a coder'))
