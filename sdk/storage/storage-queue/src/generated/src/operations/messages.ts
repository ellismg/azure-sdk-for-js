/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/messagesMappers";
import * as Parameters from "../models/parameters";
import { StorageClientContext } from "../storageClientContext";

/** Class representing a Messages. */
export class Messages {
  private readonly client: StorageClientContext;

  /**
   * Create a Messages.
   * @param {StorageClientContext} client Reference to the service client.
   */
  constructor(client: StorageClientContext) {
    this.client = client;
  }

  /**
   * The Dequeue operation retrieves one or more messages from the front of the queue.
   * @param [options] The optional parameters
   * @returns Promise<Models.MessagesDequeueResponse>
   */
  dequeue(options?: Models.MessagesDequeueOptionalParams): Promise<Models.MessagesDequeueResponse>;
  /**
   * @param callback The callback
   */
  dequeue(callback: coreHttp.ServiceCallback<Models.DequeuedMessageItem[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  dequeue(options: Models.MessagesDequeueOptionalParams, callback: coreHttp.ServiceCallback<Models.DequeuedMessageItem[]>): void;
  dequeue(options?: Models.MessagesDequeueOptionalParams | coreHttp.ServiceCallback<Models.DequeuedMessageItem[]>, callback?: coreHttp.ServiceCallback<Models.DequeuedMessageItem[]>): Promise<Models.MessagesDequeueResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      dequeueOperationSpec,
      callback) as Promise<Models.MessagesDequeueResponse>;
  }

  /**
   * The Clear operation deletes all messages from the specified queue.
   * @param [options] The optional parameters
   * @returns Promise<Models.MessagesClearResponse>
   */
  clear(options?: Models.MessagesClearOptionalParams): Promise<Models.MessagesClearResponse>;
  /**
   * @param callback The callback
   */
  clear(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  clear(options: Models.MessagesClearOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  clear(options?: Models.MessagesClearOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.MessagesClearResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      clearOperationSpec,
      callback) as Promise<Models.MessagesClearResponse>;
  }

  /**
   * The Enqueue operation adds a new message to the back of the message queue. A visibility timeout
   * can also be specified to make the message invisible until the visibility timeout expires. A
   * message must be in a format that can be included in an XML request with UTF-8 encoding. The
   * encoded message can be up to 64 KB in size for versions 2011-08-18 and newer, or 8 KB in size
   * for previous versions.
   * @param queueMessage A Message object which can be stored in a Queue
   * @param [options] The optional parameters
   * @returns Promise<Models.MessagesEnqueueResponse>
   */
  enqueue(queueMessage: Models.QueueMessage, options?: Models.MessagesEnqueueOptionalParams): Promise<Models.MessagesEnqueueResponse>;
  /**
   * @param queueMessage A Message object which can be stored in a Queue
   * @param callback The callback
   */
  enqueue(queueMessage: Models.QueueMessage, callback: coreHttp.ServiceCallback<Models.EnqueuedMessage[]>): void;
  /**
   * @param queueMessage A Message object which can be stored in a Queue
   * @param options The optional parameters
   * @param callback The callback
   */
  enqueue(queueMessage: Models.QueueMessage, options: Models.MessagesEnqueueOptionalParams, callback: coreHttp.ServiceCallback<Models.EnqueuedMessage[]>): void;
  enqueue(queueMessage: Models.QueueMessage, options?: Models.MessagesEnqueueOptionalParams | coreHttp.ServiceCallback<Models.EnqueuedMessage[]>, callback?: coreHttp.ServiceCallback<Models.EnqueuedMessage[]>): Promise<Models.MessagesEnqueueResponse> {
    return this.client.sendOperationRequest(
      {
        queueMessage,
        options
      },
      enqueueOperationSpec,
      callback) as Promise<Models.MessagesEnqueueResponse>;
  }

  /**
   * The Peek operation retrieves one or more messages from the front of the queue, but does not
   * alter the visibility of the message.
   * @param [options] The optional parameters
   * @returns Promise<Models.MessagesPeekResponse>
   */
  peek(options?: Models.MessagesPeekOptionalParams): Promise<Models.MessagesPeekResponse>;
  /**
   * @param callback The callback
   */
  peek(callback: coreHttp.ServiceCallback<Models.PeekedMessageItem[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  peek(options: Models.MessagesPeekOptionalParams, callback: coreHttp.ServiceCallback<Models.PeekedMessageItem[]>): void;
  peek(options?: Models.MessagesPeekOptionalParams | coreHttp.ServiceCallback<Models.PeekedMessageItem[]>, callback?: coreHttp.ServiceCallback<Models.PeekedMessageItem[]>): Promise<Models.MessagesPeekResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      peekOperationSpec,
      callback) as Promise<Models.MessagesPeekResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, true);
const dequeueOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "{queueName}/messages",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.numberOfMessages,
    Parameters.visibilitytimeout0,
    Parameters.timeout
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  responses: {
    200: {
      bodyMapper: {
        xmlElementName: "QueueMessage",
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DequeuedMessageItem"
            }
          }
        }
      },
      headersMapper: Mappers.MessagesDequeueHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const clearOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "DELETE",
  path: "{queueName}/messages",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeout
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  responses: {
    204: {
      headersMapper: Mappers.MessagesClearHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const enqueueOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "POST",
  path: "{queueName}/messages",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.visibilitytimeout0,
    Parameters.messageTimeToLive,
    Parameters.timeout
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  requestBody: {
    parameterPath: "queueMessage",
    mapper: {
      ...Mappers.QueueMessage,
      required: true
    }
  },
  contentType: "application/xml; charset=utf-8",
  responses: {
    201: {
      bodyMapper: {
        xmlElementName: "QueueMessage",
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EnqueuedMessage"
            }
          }
        }
      },
      headersMapper: Mappers.MessagesEnqueueHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const peekOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "{queueName}/messages",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.numberOfMessages,
    Parameters.timeout,
    Parameters.peekonly
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  responses: {
    200: {
      bodyMapper: {
        xmlElementName: "QueueMessage",
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PeekedMessageItem"
            }
          }
        }
      },
      headersMapper: Mappers.MessagesPeekHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};
