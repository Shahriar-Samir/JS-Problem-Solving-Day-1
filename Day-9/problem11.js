const userInfo = {
    name:'Samir',
    age:21,
    address: 'Jordon Road'
}

const user ={
    info: ()=>{
        return `${this.name} is ${this.age} years old`
    }
}


console.log(user.info.apply(userInfo))