const Course = require('./Course')
let course1 = new Course(10,"Java")
console.log(course1)

const path = require('path')
// console.log(__filename)

const fs = require('fs');
// fs.mkdir(path.join(__dirname, '/demo'), err =>{
//     if(err) throw err
//     console.log("Directory Created")
// })

fs.writeFile(path.join(__dirname, 'demo', 'welcome.txt'), "Hello World", err => {
    if(err) throw err
    console.log("file is created")
})

fs.appendFile(path.join(__dirname, 'demo', 'welcome.txt'), "Welcome to Node World", err =>{
    if(err) throw err
    console.log("file appended")
})

fs.readFile(path.join(__dirname, 'demo', 'welcome.txt'), 'utf8', (err,data) => {
    if(err) throw err
    console.log(data)
})

