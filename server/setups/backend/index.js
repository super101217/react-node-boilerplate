import { MESSAGES } from "../../consts";

import { EnvHandler, ServerLogger } from "../../utils";

const setupBackend = (app) => {
  app.listen(EnvHandler.getEnvironmentVariable("PORT"), () => {
    ServerLogger.info(MESSAGES.SERVER.START_SUCCESS);
  });
};

export default setupBackend;
