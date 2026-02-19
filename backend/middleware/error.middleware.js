import AppError from "../errors/app.errors.js";

function errorMiddleware(err, req, res, next){
    
    console.error("Error:", err.message);

    if(err instanceof AppError){
        
        return res.status(err.code).json({error : err.message, code : err.code});
    }
    
    return res.status(500).json({error : "internal server error."})
}

export default errorMiddleware;