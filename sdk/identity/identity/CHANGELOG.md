# Changelog

## 1.0.0-preview.4 - 2019-10-07

- Introduced the [`AuthorizationCodeCredential`](https://azure.github.io/azure-sdk-for-js/identity/classes/authorizationcodecredential.html) for performing the [authorization code flow](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) with AAD ([PR #5356](https://github.com/Azure/azure-sdk-for-js/pull/5356))
- Fixed an issue preventing the `ManagedIdentityCredential` from working inside of Azure Function Apps ([PR #5144](https://github.com/Azure/azure-sdk-for-js/pull/5144))
- Added tracing to `IdentityClient` and credential implementations ([PR #5283](https://github.com/Azure/azure-sdk-for-js/pull/5283))
- Improved the exception message for `AggregateAuthenticationError` so that errors thrown from `DefaultAzureCredential` are now more actionable ([PR #5409](https://github.com/Azure/azure-sdk-for-js/pull/5409))

## 1.0.0-preview.3 - 2019-09-09

- Fixed a ping timeout issue. The timeout is now configurable. ([PR #4941](https://github.com/Azure/azure-sdk-for-js/pull/4941))
- Fixed IMDS endpoint detection false positive ([PR #4909](https://github.com/Azure/azure-sdk-for-js/pull/4909))

## 1.0.0-preview.2 - 2019-08-05

- Introduced the following credential types:
  - [`DeviceCodeCredential`](https://azure.github.io/azure-sdk-for-js/identity/classes/devicecodecredential.html)
  - [`InteractiveBrowserCredential`](https://azure.github.io/azure-sdk-for-js/identity/classes/interactivebrowsercredential.html)
  - [`UsernamePasswordCredential`](https://azure.github.io/azure-sdk-for-js/identity/classes/usernamepasswordcredential.html)
- This library can now be used in the browser!  The following credential types supported in browser builds:
  - `ClientSecretCredential`
  - `UsernamePasswordCredential`
  - `InteractiveBrowserCredential`

## 1.0.0-preview.1 - 2019-06-27

For release notes and more information please visit https://aka.ms/azure-sdk-preview1-js

- Introduced the following credential types:
  - [`DefaultAzureCredential`](https://azure.github.io/azure-sdk-for-js/identity/classes/defaultazurecredential.html)
  - [`EnvironmentCredential`](https://azure.github.io/azure-sdk-for-js/identity/classes/environmentcredential.html)
  - [`ManagedIdentityCredential`](https://azure.github.io/azure-sdk-for-js/identity/classes/managedidentitycredential.html)
  - [`ClientSecretCredential`](https://azure.github.io/azure-sdk-for-js/identity/classes/clientsecretcredential.html)
  - [`ClientCertificateCredential`](https://azure.github.io/azure-sdk-for-js/identity/classes/clientcertificatecredential.html)
  - [`ChainedTokenCredential`](https://azure.github.io/azure-sdk-for-js/identity/classes/chainedtokencredential.html)
