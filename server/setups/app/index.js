import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

import { errorMiddleware, routeMiddleware } from "../../middlewares";

import routes from "../../routes";

import { ROUTE_VERSION } from "../../config";

import { EnvHandler } from "../../utils";

const createApp = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(cors());
  app.use(express.json());

  app.use(routeMiddleware);

  app.use(`/api/${ROUTE_VERSION}/`, routes);

  if (EnvHandler.isProduction()) {
    app.use(express.static("client/build"));
  }

  app.use(errorMiddleware);

  return app;
};

export default createApp();
