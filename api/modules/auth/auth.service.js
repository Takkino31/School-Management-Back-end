const UserService = require('../users/users.service')


module.exports.register = ({username,password}) =>{
    UserService.insertOne({username,password})
}

module.exports.login = ({username,password}) =>{
    const user = UserService.findOneBysername(username)
    return (!user || user.password !== password) ? null : user
}

module.exports.listUsers = ()=>{
    return UserService.list()
}