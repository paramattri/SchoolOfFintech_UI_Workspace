const jwt = require('jsonwebtoken')
const secretkey = require('../secret.key')

module.exports = (req, res, next) => {
    const auth = req.headers['authorization']

    const[barer, token] = auth.split(' ')

    try{
        jwt.verify(token, secretkey)
        next()
    }catch(err){
        res.status(401)
        res.json({err : 'Invalid Token'})
    }
}