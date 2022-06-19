import Logger from "./logger";

class ResponseHandler {
  success(res, result) {
    Logger.log("Response: ", result);
    res.status(200).json(result);
  }

  failure(res, error) {
    Logger.log(error.stack);
    res.status(error.statusCode).json({
      message: error.message,
    });
  }
}

export default new ResponseHandler();
