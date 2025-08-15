import SwaggerParser from "@apidevtools/swagger-parser";
import type { CliArgs } from "../cli/options";
import logger from "../logger/logger";
import { generateDotNetSdk } from "./dot-net/generator";
import { generateGoSdk } from "./go/generator";
import { generateTypescriptSdk } from "./typescript/generator";
import type { OpenAPIV3 } from "openapi-types";

export async function generateSdk(args: CliArgs) {
  logger.info(`Generating SDK for ${args.language} with name ${args.sdkName} and version ${args.sdkVersion}`);

  logger.debug(`Validating OpenAPI specification at ${args.spec}`);
  const spec = (await SwaggerParser.validate(args.spec)) as OpenAPIV3.Document;
  logger.debug(`OpenAPI specification validated successfully`);

  if (spec.openapi !== "3.0.0") {
    throw new Error("Only OpenAPI 3.0.0 is supported");
  }

  logger.debug(`Generating SDK for ${spec.info.title}, version ${spec.info.version} ${spec.info.description}`);
  switch (args.language) {
    case "typescript":
      await generateTypescriptSdk(spec, args);
      break;
    case ".NET":
      await generateDotNetSdk(spec, args);
      break;
    case "go":
      await generateGoSdk(spec, args);
      break;
    default:
      throw new Error(`Unsupported language: ${args.language}`);
  }
}
