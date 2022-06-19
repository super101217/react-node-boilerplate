import path from "path";
import { Logger } from "logger";

import Env from "./env.handler";

class ServerLogger {
  fileLogger;

  constructor() {
    if (Env.isProduction()) {
      const loggerFilePath = path.join(__dirname, "../../server.log");
      this.fileLogger = new Logger(loggerFilePath);
    }
  }

  log(...descriptions) {
    if (!Env.isTest()) {
      if (Env.isProduction()) {
        this.fileLogger?.log("info", ...descriptions);
      } else {
        console.log(...descriptions);
      }
    }
  }

  info(description) {
    if (!Env.isTest()) {
      if (Env.isProduction()) {
        this.fileLogger?.info(description);
      } else {
        console.info(description);
      }
    }
  }

  error(description) {
    if (!Env.isTest()) {
      if (Env.isProduction()) {
        this.fileLogger?.error(description);
      } else {
        console.error(description);
      }
    }
  }

  fatal(description) {
    if (!Env.isTest()) {
      if (Env.isProduction()) {
        this.fileLogger?.fatal(description);
      } else {
        console.error(description);
      }
    }
  }

  group(groupDescription) {
    this.info(`/---------- ${groupDescription.title} ----------/`);
    groupDescription.descriptions.forEach((description) => {
      this.log(description.description, ":", description.info);
    });
    this.info(`/---------- End ----------/`);
  }
}

export default new ServerLogger();
