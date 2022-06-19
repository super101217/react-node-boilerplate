import httpStatus from "http-status";

import { APIError, ResponseHandler } from "../utils";

const errorMiddleware = (err, req, res, next) => {
  let error = err;
  if (!(error instanceof APIError)) {
    const statusCode = error.statusCode
      ? httpStatus.BAD_REQUEST
      : httpStatus.INTERNAL_SERVER_ERROR;
    const message = error.message || httpStatus[statusCode];
    error = new APIError(statusCode, message, err.stack);
  }
  ResponseHandler.failure(res, error);
};

export default errorMiddleware;
