import dotenv from "dotenv";
import fs from "fs";
import path from "path";

class EnvHandler {
  requiredKeys = ["PORT"];

  variables = {};

  init() {
    // get the NODE_ENV variable from environment variables
    // NODE_ENV environment variable is must
    const environment = this.getEnvironment();

    // ensure an environment file exists
    const envFilePath = `.env.${environment}`;
    const fullEnvFilePath = path.join(__dirname, `../${envFilePath}`);
    if (!fs.existsSync(fullEnvFilePath)) {
      throw new Error(
        `Please add a ${envFilePath} file to the root directory with a NODE_ENV value`
      );
    }
    dotenv.config({
      path: fullEnvFilePath,
    });

    // get a list of keys that are not in .env but are required in this.requiredKeys
    const missingKeys = this.requiredKeys.filter((key) => {
      const variable = this.getEnvironmentVariable(key);
      if (!variable) {
        return true;
      }
      return false;
    });

    if (missingKeys.length) {
      const message = `
          The following required env variables are missing: 
              ${missingKeys.join(", ")}
          Please add them to your ${envFilePath} file
        `;
      throw new Error(message);
    }
  }

  getEnvironmentVariable(variable) {
    const environmentVariables = process.env;
    return environmentVariables[variable];
  }

  getEnvironment() {
    return this.getEnvironmentVariable("NODE_ENV") || "production";
  }

  isDevelopment() {
    return this.getEnvironment() === "development";
  }

  isProduction() {
    return this.getEnvironment() === "production";
  }

  isTest() {
    return this.getEnvironment() === "test";
  }

  setVariable(name, variable) {
    this.variables[name] = variable;
  }

  getVariable(name) {
    return this.variables[name];
  }
}

export default new EnvHandler();
