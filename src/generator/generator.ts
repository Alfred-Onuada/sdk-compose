import SwaggerParser from "@apidevtools/swagger-parser";
import type { CliArgs } from "../cli/options";
import logger from "../logger/logger";

export async function generateSdk(args: CliArgs) {
  logger.info(`Generating SDK for ${args.language} with name ${args.sdkName} and version ${args.sdkVersion}`);

  logger.debug(`Validating OpenAPI specification at ${args.spec}`);
  const spec = await SwaggerParser.validate(args.spec);
  logger.debug(`OpenAPI specification validated successfully`);

  logger.debug("Spec", spec);
}
