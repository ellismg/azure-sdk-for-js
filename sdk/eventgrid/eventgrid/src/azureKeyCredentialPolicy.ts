// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { KeyCredential, AzureKeyCredential } from "@azure/core-auth";
import {
  RequestPolicyFactory,
  RequestPolicy,
  BaseRequestPolicy,
  WebResourceLike,
  HttpOperationResponse,
  RequestPolicyOptionsLike
} from "@azure/core-http";

const API_KEY_HEADER_NAME = "aeg-sas-key";
const SAS_TOKEN_HEAER_NAME = "aeg-sas-token";

/**
 * A credential type which allows using a "shared access signature" to authenticate with EventGrid
 * when sending events.
 */
export class SharedAccessSignatureCredential extends AzureKeyCredential {
  constructor(signature: string) {
    super(signature);
  }
}

/**
 * Create an HTTP pipeline policy to authenticate a request
 * using an `AzureKeyCredential` for Event Grid
 */
export function createEventGridAzureKeyCredentialPolicy(
  credential: KeyCredential
): RequestPolicyFactory {
  return {
    create: (nextPolicy: RequestPolicy, options: RequestPolicyOptionsLike) => {
      return new EventGridAzureKeyCredentialPolicy(nextPolicy, options, credential);
    }
  };
}

/**
 * A concrete implementation of an AzureKeyCredential policy
 * using the appropriate header for Event Grid
 */
class EventGridAzureKeyCredentialPolicy extends BaseRequestPolicy {
  private credential: KeyCredential;
  private headerName: string;
  
  constructor(
    nextPolicy: RequestPolicy,
    options: RequestPolicyOptionsLike,
    credential: KeyCredential
  ) {
    super(nextPolicy, options);
    this.credential = credential;
    this.headerName = credential instanceof SharedAccessSignatureCredential ? SAS_TOKEN_HEAER_NAME : API_KEY_HEADER_NAME;
  }

  public async sendRequest(webResource: WebResourceLike): Promise<HttpOperationResponse> {
    if (!webResource) {
      throw new Error("webResource cannot be null or undefined");
    }

    webResource.headers.set(this.headerName, this.credential.key);
    return this._nextPolicy.sendRequest(webResource);
  }
}
