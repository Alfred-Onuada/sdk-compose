import type { Options } from "yargs";
import { statSync } from "fs";
import path from "path";

export interface CliArgs {
  verbose?: boolean;
  spec: string;
  output: string;
  language: "typescript" | ".NET" | "go";
  sdkName: string;
  sdkVersion: string;
  env: Record<string, any>;
  logType: "json" | "simple";
}

/**
 * CLI options for the SDK Compose tool.
 *
 * run `bun run src/index.ts -- --help` to see the available options.
 */
export const cliOptions: Record<keyof CliArgs, Options> = {
  verbose: {
    alias: "v",
    type: "boolean",
    description: "Show verbose output",
  },
  spec: {
    alias: "s",
    type: "string",
    description: "Path to the OpenAPI specification file",
    demandOption: true,
    coerce: (value: string) => {
      if (!statSync(path.resolve(value)).isFile()) {
        throw new Error(`File ${value} does not exist`);
      }
      return value;
    },
  },
  output: {
    alias: "o",
    type: "string",
    description: "Path to the output directory for the generated SDK",
    demandOption: true,
    coerce: (value: string) => {
      if (!statSync(path.resolve(value)).isDirectory()) {
        throw new Error(`Directory ${value} does not exist`);
      }
      return value;
    },
  },
  language: {
    alias: "l",
    type: "string",
    description: "Language of the generated SDK",
    demandOption: true,
    choices: ["typescript", ".NET", "go"],
  },
  sdkName: {
    type: "string",
    description: "Name of the generated SDK",
    demandOption: true,
  },
  sdkVersion: {
    type: "string",
    description: "Version of the generated SDK",
    demandOption: true,
  },
  env: {
    type: "string",
    description: "Environment variables to be used in the generated SDK (format: JSON)",
    coerce: (value: string) => {
      return JSON.parse(value);
    },
  },
  logType: {
    type: "string",
    description: "Type of log output",
    choices: ["json", "simple"],
    default: "simple",
  },
};
