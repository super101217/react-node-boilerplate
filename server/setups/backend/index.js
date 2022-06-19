import { MESSAGES } from "../../consts";

import { ServerLogger } from "../../utils";

const setupBackend = (app) => {
  app.listen(8080, () => {
    ServerLogger.info(MESSAGES.SERVER.START_SUCCESS);
  });
};

export default setupBackend;
