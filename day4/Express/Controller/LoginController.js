const con = require('./config')
const jwt = require('jsonwebtoken')
const secret = require('../secret.key')

module.exports = (req, res, next) => {

    if('id' in req.body && 'password' in req.body){

        const data = [req.body.id, req.body.password]

        con.query('select * from students where id=? and name=?', data, (err, results) => {

            if(err) throw err
            {
                const isValidUser = (results.length == 1)
                if(isValidUser){
                    let user = results[0]
                }

                const payload = {
                    sub : user.id,
                    name : user.name,
                    iat : Date.now()
                }

                const token = jwt.sign(payload, secret)
                res.json(token)
            }
        })
    }

    else{
        res.status(401)
        res.json({'message' : 'Invalid Username or Password'})
    }
}