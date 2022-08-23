const users = [
    {id: 1,username: 'admin', password: 1234, role :  'ADMIN'},
    {id: 2, username: 'james', password: 1234, role :  'USER'},
    {id: 3, username: 'mike', password: 1234, role :  'USER'},
    {id: 4, username: 'leo', password: 1234, role :  'USER'},
]

const User = require('./users.schema')

module.exports.insertOne = async (userInput) => {
    const user = {...userInput,role : 'USER'}
    const result = await User.create(user)
    console.log({result});
    return result
}

module.exports.findOneBysername = (username) =>{
    return users.find((user)=>user.username === username)
}

module.exports.list = () =>{
    return users
}