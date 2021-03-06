const { SecretsClient } = require("../../src");
const { DefaultAzureCredential } = require("@azure/identity");

async function main() {
  // DefaultAzureCredential expects the following three environment variables:
  // - AZURE_TENANT_ID: The tenant ID in Azure Active Directory
  // - AZURE_CLIENT_ID: The application (client) ID registered in the AAD tenant
  // - AZURE_CLIENT_SECRET: The client secret for the registered application
  const credential = new DefaultAzureCredential();

  const vaultName = process.env["KEYVAULT_NAME"] || "<keyvault-name>";
  const url = `https://${vaultName}.vault.azure.net`;
  const client = new SecretsClient(url, credential);

  const bankAccountSecretName = "BankAccountPassword151231";
  const storageAccountSecretName = "StorageAccountPassword151231";

  // Create our secrets
  await client.setSecret(bankAccountSecretName, "ABC123");
  await client.setSecret(storageAccountSecretName, "XYZ789");

  // List the secrets we have, by page
  console.log("Listing secrets by page");
  let listSecrets = client.listSecrets().byPage({ maxPageSize: 2 });
  while (true) {
    let { done, value } = await listSecrets.next();
    if (done) {
      break;
    }

    for (const secretAttr of value) {
      const secret = await client.getSecret(secretAttr.name);
      console.log("secret: ", secret);
    }
    console.log("--page--");
  }

  // List the secrets we have, all at once
  console.log("Listing secrets all at once");
  let listSecrets = client.listSecrets();
  while (true) {
    let { done, value } = await listSecrets.next();
    if (done) {
      break;
    }

    const secret = await client.getSecret(value.name);
    console.log("secret: ", secret);
  }

  await client.setSecret(bankAccountSecretName, "ABC567");

  // List the versions of BankAccountPassword
  console.log("Listing all versions of a secret");
  let listSecretVersions = client.listSecretVersions(bankAccountSecretName);
  while (true) {
    let { done, value } = await listSecretVersions.next();
    if (done) {
      break;
    }

    const secret = await client.getSecret(value.name);
    console.log("version: ", secret);
  }

  await client.deleteSecret(bankAccountSecretName);
  await client.deleteSecret(storageAccountSecretName);
}

main().catch((err) => {
  console.log("error code: ", err.code);
  console.log("error message: ", err.message);
  console.log("error stack: ", err.stack);
});
