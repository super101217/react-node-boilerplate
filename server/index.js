import { app, setupBackend } from "./setups";

import { MESSAGES } from "./consts";

import { ServerLogger } from "./utils";

const startServer = () => {
  try {
    setupBackend(app);
  } catch (error) {
    ServerLogger.info(MESSAGES.SERVER.START_FAILURE);
    ServerLogger.error(error);
  }
};

startServer(app);
