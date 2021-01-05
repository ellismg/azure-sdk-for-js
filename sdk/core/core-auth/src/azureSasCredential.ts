// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * Represents a credential defined by a static shared access signature.
 */
export interface SasCredential {
  /**
   * The value of the shared access signature represented as a string
   */
  readonly signature: string;
}

/**
 * A static-signature-based credential that supports updating
 * the underlying signature value.
 */
export class AzureSasCredential implements SasCredential {
  private _signature: string;

  /**
   * The value of the signature to be used in authentication
   */
  public get signature(): string {
    return this._signature;
  }

  /**
   * Create an instance of an AzureSasCredential for use
   * with a service client.
   *
   * @param signature - The initial value of the signature to use in authentication
   */
  constructor(signature: string) {
    if (!signature) {
      throw new Error("key must be a non-empty string");
    }

    this._signature = signature;
  }

  /**
   * Change the value of the signature.
   *
   * Updates will take effect upon the next request after
   * updating the signature value.
   *
   * @param newSignature - The new signature value to be used
   */
  public update(newSignature: string): void {
    this._signature = newSignature;
  }
}
