const UserService = require('../users/users.service')
const jwt = require('jsonwebtoken')

module.exports.register = ({username,password}) =>{
    UserService.insertOne({username,password})
}

module.exports.login = ({username,password}) =>{
    let user = UserService.findOneBysername(username)
    if (!user || user.password !== password) {
        return null
    } else {
        user = {...user}
        delete user.password
        const token = jwt.sign(user,'myAppKey',{expiresIn: 60*60})
        return {user, token}
    }
}

module.exports.listUsers = ()=>{
    return UserService.list()
}