const errorHandler = (err, req, res, next_ => {
    const statusCode = res.statusCode ? res.statusCode : 500
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.node_env === 'production' ? null : err.stack
    })
})

module.exports = { errorHandler }