const AuthService = require('./auth.service')
module.exports = (app)=>{
    app.use(async(req,res,next)=>{
    const authorization = req.headers.authorization || ""
        try {
        
            let tokenValidation = await AuthService.checkToken(authorization.replace('Bearer ',''))
            console.log({tokenValidation});
            next()

        } catch (error) {
            res.status(401).send('Session Expired')
        }
        
    })

    // AuthService.checkToken(authorization)
    // .then((result)=>{})
    // .then((error)=>{})
} 