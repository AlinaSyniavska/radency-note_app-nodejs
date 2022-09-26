class CustomError extends Error {
    constructor(message: string, status: number = 400) {
        super(message);
        // this.status = status;
    }
}

module.exports = CustomError;
