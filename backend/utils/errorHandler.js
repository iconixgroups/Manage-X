```javascript
const errorHandler = (err, req, res, next) => {
    let error = { ...err };

    error.message = err.message;

    // Log to console for the developer
    console.error(err);

    // Mongoose bad ObjectId
    if (err.name === 'CastError') {
        const message = `Resource not found with id of ${err.value}`;
        error = { ...error, message, statusCode: 404 };
    }

    // Mongoose duplicate key
    if (err.code === 11000) {
        const message = 'Duplicate field value entered';
        error = { ...error, message, statusCode: 400 };
    }

    // Mongoose validation error
    if (err.name === 'ValidationError' || err.name === 'BadRequestError') {
        const message = err.name === 'BadRequestError' ? err.message : Object.values(err.errors).map(val => val.message);
        error = { ...error, message, statusCode: 400 };
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    });
};

module.exports = errorHandler;
```