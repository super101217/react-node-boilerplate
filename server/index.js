import { app, setupBackend } from "./setups";

import { MESSAGES } from "./consts";

import { ServerLogger, EnvHandler } from "./utils";

const startServer = () => {
  try {
    EnvHandler.init();
    ServerLogger.info(MESSAGES.ENVIRONMENT.SETUP_SUCCESS);
  } catch (error) {
    ServerLogger.info(MESSAGES.ENVIRONMENT.SETUP_FAILURE);
    ServerLogger.error(error);
    return;
  }

  try {
    setupBackend(app);
  } catch (error) {
    ServerLogger.info(MESSAGES.SERVER.START_FAILURE);
    ServerLogger.error(error);
    return;
  }
};

startServer(app);
