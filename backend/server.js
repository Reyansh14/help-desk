const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.port || 5000

const app = express()
app.get('/', (req, res) => {
    res.status(200).json({ message: 'This is the Help Desk API' })
})

//Routes
app.use('/api/users', require('./routes/userRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))