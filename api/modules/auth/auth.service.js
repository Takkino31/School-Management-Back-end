const UserService = require('../users/users.service')
const jwt = require('jsonwebtoken')

module.exports.register = ({username,password}) =>{
   return UserService.insertOne({username,password})
}

module.exports.login = async ({username,password}) =>{
    let user = await UserService.findOneBysername(username)
    if (!user || user.password != password) {
        return null
    } else {
        user = {...user.toObject()}
        delete user.password
        const token = jwt.sign(user,'myAppKey',{expiresIn: 60*60})
        return {user, token}
    }
}

module.exports.checkToken = (token)=>{
    return new Promise ((resolve, reject) => {
        jwt.verify(token,'myAppKey',null,(error,decoded)=>{
            if (error) {
                reject(error)
            }else{
                resolve(decoded)  
            }
        }) 
    })
}

module.exports.listUsers = ()=>{
    return UserService.list()
}