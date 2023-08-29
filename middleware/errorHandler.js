const errorHandlerMiddleware = (err, req, res, next) => {
    if (err) {
        res.status(500).json(err.message);
    }
};

export default errorHandlerMiddleware;
