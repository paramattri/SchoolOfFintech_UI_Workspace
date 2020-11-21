const mysql = require('mysql')

const con = mysql.createConnection({
    
    host : 'localhost',
    user : 'root',
    password : 'dashingteam',
    database : 'students'

})

module.exports = con