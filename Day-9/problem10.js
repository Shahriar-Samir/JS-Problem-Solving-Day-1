// find the logest word in a string 


const longest = str => str.split(' ').sort((a,b)=> b.length - a.length)[0]

console.log(longest('Samir is a good and betterest boy'))