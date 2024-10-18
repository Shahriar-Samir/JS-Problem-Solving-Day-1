//  longest word in a string, methods - 2

// using sort 

const findLongest1= (str)=> str.split(' ').sort((a,b)=> b.length-a.length)[0]

console.log(findLongest1('this is the best template ever seen in my life'))

// using reduce method

const findLongest2 = (str)=> str.split(' ').reduce((acc,c)=> acc.length>c.length? acc : c)

console.log(findLongest2('this is the best template ever seen in my life'))

