import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { cliOptions, type CliArgs } from "./cli/options";
import logger, { configureLogger } from "./logger/logger";
import { generateSdk } from "./generator/generator";

async function main() {
  // Parse the command line arguments
  const args = yargs(hideBin(process.argv)).options(cliOptions).parseSync() as CliArgs;

  // set the log level
  configureLogger(args);

  logger.info("Starting SDK Compose tool, built with ❤️ by the team at https://github.com/Alfred-Onuada/sdk-compose");

  await generateSdk(args);

  logger.info(`SDK generated successfully at ${args.output}, pleasure serving you!`);
}

main().catch((err) => {
  logger.error(err);
  process.exit(1);
});
