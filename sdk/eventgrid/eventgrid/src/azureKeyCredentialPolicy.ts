// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { KeyCredential } from "@azure/core-auth";
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

export class EventGridSharedAccessTokenCredential implements KeyCredential {
  key: string

  constructor(key: string) {
    this.key = key
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
    this.headerName = credential instanceof EventGridSharedAccessTokenCredential ? SAS_TOKEN_HEAER_NAME : API_KEY_HEADER_NAME;
  }

  public async sendRequest(webResource: WebResourceLike): Promise<HttpOperationResponse> {
    if (!webResource) {
      throw new Error("webResource cannot be null or undefined");
    }

    webResource.headers.set(this.headerName, this.credential.key);
    return this._nextPolicy.sendRequest(webResource);
  }
}
