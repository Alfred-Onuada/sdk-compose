import type { OpenAPIV3 } from "openapi-types";
import type { CliArgs } from "../../cli/options";
import logger from "../../logger/logger";

export async function generateTypescriptSdk(spec: OpenAPIV3.Document, args: CliArgs) {
  logger.debug("Generating TypeScript SDK");
}
