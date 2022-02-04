const asynchandler = require('express-async-handler')

// @desc Register a new user
// @route /api/users
// @access Public
const registerUser = asynchandler(async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Include name, email and password fields!');
    }
    res.send('Register Route')
})

// @desc Login a user
// @route /api/users/login
// @access Public
const loginUser = asynchandler(async (req, res) => {
    res.send('Login Route')
})

module.exports = {
    registerUser,
    loginUser
}