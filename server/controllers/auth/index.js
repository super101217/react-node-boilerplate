import httpStatus from "http-status";

import { userService } from "../../services";

import { APIError, ResponseHandler } from "../../utils";

export const login = async (req, res, next) => {
  try {
    ResponseHandler(res, {
      message: "This is login endpoint.",
    });
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res, next) => {
  try {
    ResponseHandler(res, {
      message: "This is register endpoint.",
    });
  } catch (error) {
    next(error);
  }
};

export const me = async (req, res, next) => {
  try {
    ResponseHandler(res, {
      message: "This is login endpoint.",
    });
  } catch (error) {
    next(error);
  }
};
