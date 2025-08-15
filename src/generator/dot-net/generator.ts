import type { OpenAPIV3 } from "openapi-types";
import type { CliArgs } from "../../cli/options";
import logger from "../../logger/logger";

export async function generateDotNetSdk(spec: OpenAPIV3.Document, args: CliArgs) {
  logger.debug("Generating .NET SDK");
}
