import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "node",
};

export default config;
