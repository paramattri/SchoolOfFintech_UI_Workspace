const express = require('express')
const router = express.Router()
const {getStudents, createStudents} = require('./Controller/StudentController')

router.route('/').get(getStudents).post(createStudents)

module.exports = router