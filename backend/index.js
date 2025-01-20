const express = require('express');
require('dotenv').config()
const app = express()
const cors = require('cors')
const PORT = process.env.PORT||3001

var usersRouter = require('./routes/authUser')


app.use(cors())
app.use(express.json())



app.use('/users',usersRouter)

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})


module.exports = app;