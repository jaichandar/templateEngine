const express = require('express')
const router = express.Router()
const { User } = require('../model/User')



router.get('/', async (req, res) => {
    const user = await User.find()
    res.render('index', {
        data: {
            user
        }
    })
})


router.post('/', async (req, res) => {
    let user = await new User({
        name: req.body.name,
        age: req.body.age
    })
    user = await user.save()
    res.send(user)
})


module.exports = router;