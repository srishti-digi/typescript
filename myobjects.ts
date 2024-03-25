const User={
    name:"srishti",
    email:"dhjj@gmail.com",
    isActive:true

}

function createUser({name:string, isPaid:boolean}){}


createUser({name:"sri",isPaid:false})


type User={
    name:string
    age:string
    isActive:boolean
}
function createUser(user:User):User{
    return {name:"" , age: "", isActive:true}
}


createUser({name:"" , age: "", isActive:true})
export{}