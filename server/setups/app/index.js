import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

import { routeMiddleware } from "../../middlewares";

import routes from "../../routes";

import { ROUTE_VERSION } from "../../config";

const createApp = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(cors());
  app.use(express.json());

  app.use(routeMiddleware);

  app.use(`/api/${ROUTE_VERSION}/`, routes);

  return app;
};

export default createApp();
