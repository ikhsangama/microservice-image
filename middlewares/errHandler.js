function errHandler(err, req, res, next) {
  let statusCode = err.statusCode || 500

  res.status(statusCode).json({
    message: err.message || 'Internal server error',
  })

}
module.exports = errHandler