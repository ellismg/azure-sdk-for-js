// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HttpOperationResponse } from "./httpOperationResponse";
import { WebResource } from "./webResource";

export class RestError extends Error {
  static readonly REQUEST_SEND_ERROR: string = "REQUEST_SEND_ERROR";
  static readonly REQUEST_ABORTED_ERROR: string = "REQUEST_ABORTED_ERROR";
  static readonly PARSE_ERROR: string = "PARSE_ERROR";

  code?: string;
  statusCode?: number;
  request?: WebResource;
  response?: HttpOperationResponse;
  body?: any;
  constructor(
    message: string,
    code?: string,
    statusCode?: number,
    request?: WebResource,
    response?: HttpOperationResponse,
    body?: any
  ) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
    this.request = request;
    this.response = response;
    this.body = body;

    Object.setPrototypeOf(this, RestError.prototype);
  }
}
