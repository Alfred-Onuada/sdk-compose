# SDK Compose 🚀

A powerful, multi-language SDK generator that transforms OpenAPI 3.0.0 specifications into production-ready SDKs for TypeScript, .NET, and Go.

Built with ❤️ by the team at [Alfred-Onuada/sdk-compose](https://github.com/Alfred-Onuada/sdk-compose)

## ✨ Features

- **Multi-language Support**: Generate SDKs for TypeScript, .NET, and Go
- **OpenAPI 3.0.0 Compliant**: Full support for the latest OpenAPI specification
- **CLI Interface**: Easy-to-use command-line tool with comprehensive options
- **Flexible Output**: Customize SDK name, version, and output location
- **Environment Configuration**: Pass environment variables for SDK customization
- **Comprehensive Logging**: Built-in logging with JSON and simple output formats
- **Fast & Efficient**: Built with Bun for optimal performance

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- TypeScript 5.0+

### Installation

```bash
# Clone the repository
git clone https://github.com/Alfred-Onuada/sdk-compose.git
cd sdk-compose

# Install dependencies
bun install
```

### Basic Usage

```bash
# Generate a TypeScript SDK
bun run src/index.ts -- \
  --spec ./path/to/openapi-spec.json \
  --output ./output-directory \
  --language typescript \
  --sdkName "MyAwesomeSDK" \
  --sdkVersion "1.0.0"

# Generate a .NET SDK
bun run src/index.ts -- \
  --spec ./path/to/openapi-spec.json \
  --output ./output-directory \
  --language .NET \
  --sdkName "MyAwesomeSDK" \
  --sdkVersion "1.0.0"

# Generate a Go SDK
bun run src/index.ts -- \
  --spec ./path/to/openapi-spec.json \
  --output ./output-directory \
  --language go \
  --sdkName "MyAwesomeSDK" \
  --sdkVersion "1.0.0"
```

## 📖 Command Line Options

| Option         | Alias | Type    | Required | Description                                                |
| -------------- | ----- | ------- | -------- | ---------------------------------------------------------- |
| `--spec`       | `-s`  | string  | ✅       | Path to the OpenAPI specification file                     |
| `--output`     | `-o`  | string  | ✅       | Path to the output directory for the generated SDK         |
| `--language`   | `-l`  | string  | ✅       | Language of the generated SDK (`typescript`, `.NET`, `go`) |
| `--sdkName`    | -     | string  | ✅       | Name of the generated SDK                                  |
| `--sdkVersion` | -     | string  | ✅       | Version of the generated SDK                               |
| `--verbose`    | `-v`  | boolean | ❌       | Show verbose output                                        |
| `--logType`    | -     | string  | ❌       | Type of log output (`json` or `simple`, default: `simple`) |
| `--env`        | -     | string  | ❌       | Environment variables as JSON string for SDK customization |

### Examples

```bash
# Verbose output with JSON logging
bun run src/index.ts -- \
  --spec ./api-spec.json \
  --output ./generated-sdk \
  --language typescript \
  --sdkName "TodoAPI" \
  --sdkVersion "2.1.0" \
  --verbose \
  --logType json

# With environment variables
bun run src/index.ts -- \
  --spec ./api-spec.json \
  --output ./generated-sdk \
  --language .NET \
  --sdkName "WeatherAPI" \
  --sdkVersion "1.0.0" \
  --env '{"API_BASE_URL":"https://api.example.com","TIMEOUT":"30000"}'
```

## 🏗️ Project Structure

```
sdk-compose/
├── src/
│   ├── cli/           # Command-line interface and options
│   ├── generator/     # Core SDK generation logic
│   │   ├── typescript/ # TypeScript SDK generator
│   │   ├── dot-net/   # .NET SDK generator
│   │   └── go/        # Go SDK generator
│   ├── logger/        # Logging configuration
│   └── index.ts       # Main entry point
├── tests/             # Test files and specifications
├── package.json       # Project dependencies and scripts
└── tsconfig.json      # TypeScript configuration
```

## 🔧 Development

### Running in Development Mode

```bash
# Start the development server with verbose logging
bun run dev
```

### Adding New Language Support

1. Create a new generator in `src/generator/[language-name]/generator.ts`
2. Export a function named `generate[Language]Sdk`
3. Add the language to the switch statement in `src/generator/generator.ts`
4. Update the CLI options in `src/cli/options.ts`

### Example Generator Structure

```typescript
export async function generatePythonSdk(spec: OpenAPIV3.Document, args: CliArgs) {
  // Implementation for Python SDK generation
  logger.info(`Generating Python SDK: ${args.sdkName} v${args.sdkVersion}`);

  // Your SDK generation logic here
}
```

## 🧪 Testing

The project includes a sample OpenAPI specification (`tests/spec.json`) for testing purposes. This specification defines a simple Todo List API that can be used to test SDK generation.

```bash
# Test with the included specification
bun run src/index.ts -- \
  --spec ./tests/spec.json \
  --output ./test-output \
  --language typescript \
  --sdkName "TodoSDK" \
  --sdkVersion "1.0.0"
```

## 📋 Supported Languages

### TypeScript

- Full TypeScript support with type definitions
- Modern ES modules
- Comprehensive API client generation

### .NET

- C# SDK generation
- NuGet package structure
- Strong typing and IntelliSense support

### Go

- Go module structure
- Generated Go code following Go conventions
- Comprehensive error handling

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues, feature requests, or pull requests.

### Development Setup

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is private and proprietary. All rights reserved.

## 🙏 Acknowledgments

- Built with [Bun](https://bun.sh/) for fast performance
- Uses [Swagger Parser](https://github.com/APIDevTools/swagger-parser) for OpenAPI validation
- Powered by [OpenAPI Types](https://github.com/openapi-types/openapi-types) for type safety

---

**Happy SDK Generation! 🎉**

For more information, visit: [https://github.com/Alfred-Onuada/sdk-compose](https://github.com/Alfred-Onuada/sdk-compose)
