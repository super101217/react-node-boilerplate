import path from "path";
import { Logger } from "logger";

class ServerLogger {
  fileLogger;

  constructor() {
    if (process.env.NODE_ENV === "production") {
      const loggerFilePath = path.join(__dirname, "../../server.log");
      this.fileLogger = new Logger(loggerFilePath);
    }
  }

  log(...descriptions) {
    if (process.env.NODE_ENV !== "test") {
      if (process.env.NODE_ENV === "production") {
        this.fileLogger?.log("info", ...descriptions);
      } else {
        console.log(...descriptions);
      }
    }
  }

  info(description) {
    if (process.env.NODE_ENV !== "test") {
      if (process.env.NODE_ENV === "production") {
        this.fileLogger?.info(description);
      } else {
        console.info(description);
      }
    }
  }

  error(description) {
    if (process.env.NODE_ENV !== "test") {
      if (process.env.NODE_ENV === "production") {
        this.fileLogger?.error(description);
      } else {
        console.error(description);
      }
    }
  }

  fatal(description) {
    if (process.env.NODE_ENV !== "test") {
      if (process.env.NODE_ENV === "production") {
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
