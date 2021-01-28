const express = require('express')
const mongoose = require('mongoose');



mongoose.connect('mongodb://127.0.0.1:27017/educational', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(db => { console.log("[OK] DB is connected") });


const app = express()
app.use(require('cors')())
app.use(require('morgan')('dev'))

const bodyParser = require('body-parser')



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Roustes
const emailRouter = require('./routes/api-email')
const authRouter = require('./routes/api-auth')

app.use('/api/email', emailRouter)
app.use('/api/auth', authRouter)




app.listen(3000, () => {
    console.log("Server run on 3000 port")
})


