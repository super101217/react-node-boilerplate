import httpStatus from "http-status";

import { userService } from "../../services";

import { APIError, ResponseHandler } from "../../utils";

export const login = async (req, res, next) => {
  try {
    throw new APIError(httpStatus.BAD_REQUEST, "Sign up first!");
  } catch (error) {
    next(error);
  }
};

export const signup = async (req, res, next) => {
  try {
    ResponseHandler.success(res, {
      message: "Successfully signed up!",
    });
  } catch (error) {
    next(error);
  }
};

export const me = async (req, res, next) => {
  try {
    throw new APIError(
      httpStatus.UNAUTHORIZED,
      "Unauthorized! Please log in first!"
    );
  } catch (error) {
    next(error);
  }
};
