const globalErrorHandler = (err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({
    success: false,
    message: err.message,
  });
};
module.exports = globalErrorHandler;
