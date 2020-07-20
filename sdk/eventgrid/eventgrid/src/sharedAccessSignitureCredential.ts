// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * Represents a credential defined by a shared signature.
 */
export interface SignatureCredential {
  /**
   * The signature to be used in authentication.
   */
  signature(): string;
}

/**
 * A credential type which allows using a "shared access signature" to authenticate with EventGrid
 * when sending events.
 *
 * A shared access signiture may be generated by using `EventGridClient.generateSharedAccessSignature`
 */
export class EventGridSharedAccessSignatureCredential implements SignatureCredential {
  private _signature: string;

  /**
   * The value of the signature to be used in authentication
   */
  public signature(): string {
    return this._signature;
  }

  /**
   * Create an instance of an EventGridSharedAccessSignatureCredential for use
   * with a service client.
   *
   * @param {string} signature the signature to use in authentication
   */
  constructor(signature: string) {
    if (!signature) {
      throw new Error("signature must be a non-empty string");
    }

    this._signature = signature;
  }

  /**
   * Change the value of the signature.
   *
   * Updates will take effect upon the next request after
   * updating the signature value.
   *
   * @param {string} newSignature the new signature value to be used
   */
  public update(newSignature: string): void {
    this._signature = newSignature;
  }
}
