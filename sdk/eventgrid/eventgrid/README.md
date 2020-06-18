# Azure Event Grid client library for JavaScript

[Azure Event Grid](https://azure.microsoft.com/en-us/services/event-grid/) is a cloud-based service that provides reliable event delivery at massive scale.

Use the client library to:

- Send events to Event Grid using either the Event Grid or Cloud Events 1.0 schemas, or a custom schema
- Decode and process events being delivered by Event Grid

[Source code](https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/eventgrid/eventgrid/) |
[Package (NPM)](https://www.npmjs.com/package/@azure/eventgrid) |
[API reference documentation](https://aka.ms/azsdk-js-eventgrid-ref-docs) |
[Product documentation](https://docs.microsoft.com/en-us/azure/event-grid/) |
[Samples](https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/eventgrid/eventgrid/samples)

## Getting started

### Currently supported environments

- Node.js version 8.x.x or higher

### Prerequisites

- An [Azure subscription][azure_sub].
- An existing [Cognitive Services][cognitive_resource] or Text Analytics resource. If you need to create the resource, you can use the [Azure Portal][azure_portal] or [Azure CLI][azure_cli].

If you use the Azure CLI, replace `<your-resource-group-name>` and `<your-resource-name>` with your own unique names:

```PowerShell
az cognitiveservices account create --kind TextAnalytics --resource-group <your-resource-group-name> --name <your-resource-name>
```

### Install the `@azure/eventgrid` package

Install the Azure Event Grid client library for JavaScript with `npm`:

```bash
npm install @azure/eventgrid
```

### Create and authenticate a `EventGridClient`

To create a client object to access the Text Analytics API, you will need the `endpoint` of your Text Analytics resource and a `credential`. The Text Analytics client can use either Azure Active Directory credentials or an API key credential to authenticate.

You can find the endpoint for your text analytics resource either in the [Azure Portal][azure_portal] or by using the [Azure CLI][azure_cli] snippet below:

```bash
az cognitiveservices account show --name <your-resource-name> --resource-group <your-resource-group-name> --query "endpoint"
```

#### Using an Access Key

Use the [Azure Portal][azure_portal] to browse to your Text Analytics resource and retrieve an API key, or use the [Azure CLI][azure_cli] snippet below:

**Note:** Sometimes the API key is referred to as a "subscription key" or "subscription API key."

```PowerShell
az cognitiveservices account keys list --resource-group <your-resource-group-name> --name <your-resource-name>
```

Once you have an API key and endpoint, you can use the `AzureKeyCredential` class to authenticate the client as follows:

```js
const { TextAnalyticsClient, AzureKeyCredential } = require("@azure/ai-text-analytics");

const client = new TextAnalyticsClient(
  "<endpoint>",
  new AzureKeyCredential("<API key>")
);
```

#### Using a SAS Token

## Key concepts

### EventGridClient

## Examples

### Publish a Custom Event to an Event Grid Topic

### Publish a Custom Event to a Topic in an Event Grid Domain

## Troubleshooting

### Enable logs

You can set the following environment variable to get the debug logging output when using this library.

- Getting debug logs from the Azure Event Grid client library

```bash
export AZURE_LOG_LEVEL=verbose
```

For more detailed instructions on how to enable logs, you can look at the [@azure/logger package docs](https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/core/logger).

## Next steps

Please take a look at the
[samples](https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/eventgrid/eventgrid/samples)
directory for detailed examples on how to use this library.

## Contributing

If you'd like to contribute to this library, please read the [contributing guide](https://github.com/Azure/azure-sdk-for-js/blob/master/CONTRIBUTING.md) to learn more about how to build and test the code.

## Related projects

- [Microsoft Azure SDK for Javascript](https://github.com/Azure/azure-sdk-for-js)

![Impressions](https://azure-sdk-impressions.azurewebsites.net/api/impressions/azure-sdk-for-js%2Fsdk%2Feventgrid%2Feventgrid%2FREADME.png)

[azure_cli]: https://docs.microsoft.com/cli/azure
[azure_sub]: https://azure.microsoft.com/free/
[cognitive_resource]: https://docs.microsoft.com/en-us/azure/cognitive-services/cognitive-services-apis-create-account
[azure_portal]: https://portal.azure.com
[defaultazurecredential]: https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/identity/identity#defaultazurecredential
