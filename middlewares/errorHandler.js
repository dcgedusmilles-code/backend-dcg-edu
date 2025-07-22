const notFound = (req, res, next) => {
  const error = new Error(`Não encontrado: ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    status: "fail",
    message: err.message || "Erro interno do servidor",
    ...(process.env.NODE_ENV !== "production" && { stack: err.stack }),
  });
};

module.exports = { errorHandler, notFound };
