import { createLogger, format, transports } from "winston";
import type { CliArgs } from "../cli/options";

const logger = createLogger({
  level: "debug",
  transports: [new transports.Console()],
});

export function configureLogger(args: CliArgs) {
  logger.level = args.verbose ? "debug" : "info";
  logger.format = args.logType === "json" ? format.json() : format.simple();

  logger.debug(`⚙️ Configured logger with level: ${logger.level}`);
}

export default logger;
