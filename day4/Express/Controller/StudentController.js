const con = require('./config')
exports.getStudents = (req, res, next) => {

    con.query('select * from students', (err,data) => {
        if(err) throw err
        res.status(200).json(data)
        res.end()
    })
    // res.status(200).json({'Students': 'Param'})
}

exports.createStudents = (req, res, next) => {

    // const id = req.body.id
    // const name = req.body.name

    let data = [req.body.id, req.body.name]

    con.query('insert into students values(?,?)', data, (err,data) => {
        if(err) throw err
        res.status(200).json({'message' : 'success'})
        res.end()
    })
    // res.status(200).json({'Students': 'Param'})
}