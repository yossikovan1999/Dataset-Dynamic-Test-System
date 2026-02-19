class AppError extends Error{

    constructor(message, code=500){
        super(message);
        this.code = Number(code);
    }
}

export default AppError;