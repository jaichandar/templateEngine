const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const user = mongoose.model('user', userSchema)
exports.User = user;
