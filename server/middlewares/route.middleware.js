import { ServerLogger, EnvHandler } from "../utils";

const routeMiddleware = (req, res, next) => {
  ServerLogger.group({
    title: `New ${req.method} Request`,
    descriptions: [
      {
        description: "URL",
        info: `${req.protocol}://${
          req.hostname
        }:${EnvHandler.getEnvironmentVariable("PORT")}${req.url}`,
      },
      {
        description: "PARAMS",
        info: req.params,
      },
      {
        description: "QUERY",
        info: req.query,
      },
      {
        description: "BODY",
        info: req.body,
      },
    ],
  });

  next();
};

export default routeMiddleware;
