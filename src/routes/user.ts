import { User } from './../entity/User';
const express = require('express')


const router = express.Router()

router.get('/', async (req, res) => {
    const allUsers = await User.find()
    return res.status(201).json({
        success: true,
        data: allUsers
    })

})

router.post('/', async (req, res) => {
    const {
        firstName, lastName, age
    } = req.body
    const user = new User()
    user.firstName = firstName
    user.lastName = lastName
    user.age = age
    await user.save()

    return res.status(201).json({
        success: true,
        message: "New user created Successfully!",
        data: user
    })
})

router.delete('/', async (req, res) => {
    const id = req.body.id
    const user = await User.findOneBy({
        id: id,
    })
    await User.delete(parseInt(id))

    return res.status(201).json({
        success: true,
        message: "User deleted Successfully!",
        data: user
    })
})

module.exports = router