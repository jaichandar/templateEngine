const express = require('express')
const app = express()
const mongoose = require('mongoose')


const user = require('./router/user')

app.set('view engine', 'ejs')
app.use(express.json())
app.use('/api', user)

//router
//http://localhost:2000/user

mongoose.connect('mongodb://localhost:27017/sample', {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('db connected'))
    .catch(err => console.log(err))

const Port = 2000;
app.listen(Port, () => {
    console.log(`http://localhost:${Port}`)
})

