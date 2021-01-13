const express = require('express')


const app = express()
app.use(require('cors')())
app.use(require('morgan')('dev'))

const bodyParser = require('body-parser')



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// Roustes
const emailRouter = require('./routes/emailRouter')

app.use('/api/email',  emailRouter)




app.listen(3000, () => {
    console.log("Server run on 3000 port")
})



