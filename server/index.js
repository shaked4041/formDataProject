const express = require('express')
const app = express()
const port = 4004
const cors = require('cors')

app.use(express.json())
// info: let our website reach the server even if they not on the same host
app.use(cors())

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)


app.listen(port, ()=> console.log(`server running on ${port}`) )