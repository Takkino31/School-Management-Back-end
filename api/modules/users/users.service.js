const users = [
    {id: 1,username: 'admin', password: 1234, role :  'ADMIN'},
    {id: 2, username: 'james', password: 1234, role :  'USER'},
    {id: 3, username: 'mike', password: 1234, role :  'USER'},
    {id: 4, username: 'leo', password: 1234, role :  'USER'},
]

module.exports.insertOne = (userInput) => {
    console.log(userInput);
    const user = {...userInput,role : 'USER', id: users.length +1}
    users.push(user)
    return user
}

module.exports.findOneBysername = (username) =>{
    return users.find((user)=>user.username === username)
}

module.exports.list = () =>{
    return users
}