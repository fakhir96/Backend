const asyncHandler = (requestHandleer) => {
    (req, res, next) => {
        Promise.resolve(requestHandleer(req, res, next)).catch((err) => next(err))
    }
}

export {asyncHandler}


/*
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}
*/