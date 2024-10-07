//  remove duplicates 

const removeDuplicates = (array)=>{
        return array.filter((item,index)=> array.indexOf(item) === index)
}

console.log(removeDuplicates([1,2,3,3,3,4,5,6,7]))