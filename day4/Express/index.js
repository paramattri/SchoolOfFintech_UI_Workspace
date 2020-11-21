const express = require('express')
const app = express()
const route = require('./router')
// app.get('/students', (req, res) => {
//     res.send("Welcome")
// })

// app.get('/students/:name', (req, res) => {
//     res.send("Welcome "+ req.params.name)
// })

// app.post('/students', (req, res) => {
//     res.send("Welcome from Post")
// })

app.use(express.json())

app.use(require('./Controller/auth'))
app.use('/students', route)
app.use('/login', require('./Controller/LoginController'))

app.listen(5000, () => console.log("Server is running on PORT 5000"))