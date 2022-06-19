import httpStatus from "http-status";

import { MESSAGES } from "../consts";

import { APIError } from "../utils";

const authenticationMiddleware = async (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    next(new APIError(httpStatus.UNAUTHORIZED, MESSAGES.USER.UNAUTHORIZED));
    return;
  }

  req.user = {};
  next();
};

export default authenticationMiddleware;
