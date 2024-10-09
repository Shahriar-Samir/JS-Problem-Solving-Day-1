//  find longest word

const findLongest = (str)=> str.split(' ').sort((a,b)=> b.length-a.length)[0]


console.log(findLongest('Samir is a good boy and very talent man.'))