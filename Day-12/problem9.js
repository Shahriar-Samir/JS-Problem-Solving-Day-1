// sort array by specific property of object

class Profile{
    constructor(name,age,address){
        this.name= name
        this.age= age
        this.address =address
    }
}


const sort = arr=> JSON.stringify(arr.sort((a,b)=> b.age-a.age))

const user1 = new Profile('Samir',21,'Barishal')
const user2 = new Profile('Tanvir',22,'Dhaka')
const user3 = new Profile('Mahim',20,'Savar')

console.log(sort([user1, user2, user3]))
