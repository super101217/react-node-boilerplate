import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

const createApp = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(cors());
  app.use(express.json());

  return app;
};

export default createApp();
