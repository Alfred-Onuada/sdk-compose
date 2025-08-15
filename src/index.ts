import yargs from "yargs";
import { hideBin } from "yargs/helpers";

// Parse the command line arguments
const args = yargs(hideBin(process.argv))
  .option("verbose", {
    alias: "v",
    type: "boolean",
    description: "Show verbose output",
  })
  .option("spec", {
    alias: "s",
    type: "string",
    description: "Path to the OpenAPI specification file",
    demandOption: true,
  })
  .option("output", {
    alias: "o",
    type: "string",
    description: "Path to the output directory for the generated SDK",
    demandOption: true,
  })
  .option("language", {
    alias: "l",
    type: "string",
    description: "Language of the generated SDK",
    demandOption: true,
    choices: ["typescript", ".NET", "go"],
  })
  .parseSync();

console.log(args);
