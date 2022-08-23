const AuthService = require ('./auth.service')

module.exports.register = async  (req, res) => {
    const data = req.body
    const user = await AuthService.register(data)
    console.log('come on '+ user);
    res.send(user)
}

module.exports.login = (req,res)=>{
    const data = req.body
    const user = AuthService.login(data)
    if (!user) {
        res.status(540).send("user not found")
    }else{
        res.send(user)
    }
}

module.exports.list = (req,res) =>{
    res.send(AuthService.listUsers())
}

