class APIError extends Error {
  statusCode;

  constructor(statusCode, message, stack = "") {
    super(message);

    this.statusCode = statusCode;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this);
    }
  }
}

export default APIError;
