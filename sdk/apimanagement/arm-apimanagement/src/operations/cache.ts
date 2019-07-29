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
import * as Mappers from "../models/cacheMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a Cache. */
export class Cache {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a Cache.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists a collection of all external Caches in the specified service instance.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param [options] The optional parameters
   * @returns Promise<Models.CacheListByServiceResponse>
   */
  listByService(resourceGroupName: string, serviceName: string, options?: Models.CacheListByServiceOptionalParams): Promise<Models.CacheListByServiceResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, callback: coreHttp.ServiceCallback<Models.CacheCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, options: Models.CacheListByServiceOptionalParams, callback: coreHttp.ServiceCallback<Models.CacheCollection>): void;
  listByService(resourceGroupName: string, serviceName: string, options?: Models.CacheListByServiceOptionalParams | coreHttp.ServiceCallback<Models.CacheCollection>, callback?: coreHttp.ServiceCallback<Models.CacheCollection>): Promise<Models.CacheListByServiceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        options
      },
      listByServiceOperationSpec,
      callback) as Promise<Models.CacheListByServiceResponse>;
  }

  /**
   * Gets the entity state (Etag) version of the Cache specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param cacheId Identifier of the Cache entity. Cache identifier (should be either 'default' or
   * valid Azure region identifier).
   * @param [options] The optional parameters
   * @returns Promise<Models.CacheGetEntityTagResponse>
   */
  getEntityTag(resourceGroupName: string, serviceName: string, cacheId: string, options?: coreHttp.RequestOptionsBase): Promise<Models.CacheGetEntityTagResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param cacheId Identifier of the Cache entity. Cache identifier (should be either 'default' or
   * valid Azure region identifier).
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, cacheId: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param cacheId Identifier of the Cache entity. Cache identifier (should be either 'default' or
   * valid Azure region identifier).
   * @param options The optional parameters
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, cacheId: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  getEntityTag(resourceGroupName: string, serviceName: string, cacheId: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.CacheGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        cacheId,
        options
      },
      getEntityTagOperationSpec,
      callback) as Promise<Models.CacheGetEntityTagResponse>;
  }

  /**
   * Gets the details of the Cache specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param cacheId Identifier of the Cache entity. Cache identifier (should be either 'default' or
   * valid Azure region identifier).
   * @param [options] The optional parameters
   * @returns Promise<Models.CacheGetResponse>
   */
  get(resourceGroupName: string, serviceName: string, cacheId: string, options?: coreHttp.RequestOptionsBase): Promise<Models.CacheGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param cacheId Identifier of the Cache entity. Cache identifier (should be either 'default' or
   * valid Azure region identifier).
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, cacheId: string, callback: coreHttp.ServiceCallback<Models.CacheContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param cacheId Identifier of the Cache entity. Cache identifier (should be either 'default' or
   * valid Azure region identifier).
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, cacheId: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.CacheContract>): void;
  get(resourceGroupName: string, serviceName: string, cacheId: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.CacheContract>, callback?: coreHttp.ServiceCallback<Models.CacheContract>): Promise<Models.CacheGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        cacheId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.CacheGetResponse>;
  }

  /**
   * Creates or updates an External Cache to be used in Api Management instance.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param cacheId Identifier of the Cache entity. Cache identifier (should be either 'default' or
   * valid Azure region identifier).
   * @param parameters Create or Update parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.CacheCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, cacheId: string, parameters: Models.CacheContract, options?: Models.CacheCreateOrUpdateOptionalParams): Promise<Models.CacheCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param cacheId Identifier of the Cache entity. Cache identifier (should be either 'default' or
   * valid Azure region identifier).
   * @param parameters Create or Update parameters.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, cacheId: string, parameters: Models.CacheContract, callback: coreHttp.ServiceCallback<Models.CacheContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param cacheId Identifier of the Cache entity. Cache identifier (should be either 'default' or
   * valid Azure region identifier).
   * @param parameters Create or Update parameters.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, cacheId: string, parameters: Models.CacheContract, options: Models.CacheCreateOrUpdateOptionalParams, callback: coreHttp.ServiceCallback<Models.CacheContract>): void;
  createOrUpdate(resourceGroupName: string, serviceName: string, cacheId: string, parameters: Models.CacheContract, options?: Models.CacheCreateOrUpdateOptionalParams | coreHttp.ServiceCallback<Models.CacheContract>, callback?: coreHttp.ServiceCallback<Models.CacheContract>): Promise<Models.CacheCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        cacheId,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.CacheCreateOrUpdateResponse>;
  }

  /**
   * Updates the details of the cache specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param cacheId Identifier of the Cache entity. Cache identifier (should be either 'default' or
   * valid Azure region identifier).
   * @param parameters Update parameters.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  update(resourceGroupName: string, serviceName: string, cacheId: string, parameters: Models.CacheUpdateParameters, ifMatch: string, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param cacheId Identifier of the Cache entity. Cache identifier (should be either 'default' or
   * valid Azure region identifier).
   * @param parameters Update parameters.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param callback The callback
   */
  update(resourceGroupName: string, serviceName: string, cacheId: string, parameters: Models.CacheUpdateParameters, ifMatch: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param cacheId Identifier of the Cache entity. Cache identifier (should be either 'default' or
   * valid Azure region identifier).
   * @param parameters Update parameters.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, serviceName: string, cacheId: string, parameters: Models.CacheUpdateParameters, ifMatch: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  update(resourceGroupName: string, serviceName: string, cacheId: string, parameters: Models.CacheUpdateParameters, ifMatch: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        cacheId,
        parameters,
        ifMatch,
        options
      },
      updateOperationSpec,
      callback);
  }

  /**
   * Deletes specific Cache.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param cacheId Identifier of the Cache entity. Cache identifier (should be either 'default' or
   * valid Azure region identifier).
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serviceName: string, cacheId: string, ifMatch: string, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param cacheId Identifier of the Cache entity. Cache identifier (should be either 'default' or
   * valid Azure region identifier).
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, cacheId: string, ifMatch: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param cacheId Identifier of the Cache entity. Cache identifier (should be either 'default' or
   * valid Azure region identifier).
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, cacheId: string, ifMatch: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, serviceName: string, cacheId: string, ifMatch: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        cacheId,
        ifMatch,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Lists a collection of all external Caches in the specified service instance.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.CacheListByServiceNextResponse>
   */
  listByServiceNext(nextPageLink: string, options?: coreHttp.RequestOptionsBase): Promise<Models.CacheListByServiceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, callback: coreHttp.ServiceCallback<Models.CacheCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.CacheCollection>): void;
  listByServiceNext(nextPageLink: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.CacheCollection>, callback?: coreHttp.ServiceCallback<Models.CacheCollection>): Promise<Models.CacheListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByServiceNextOperationSpec,
      callback) as Promise<Models.CacheListByServiceNextResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const listByServiceOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/caches",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CacheCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getEntityTagOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "HEAD",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/caches/{cacheId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.cacheId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      headersMapper: Mappers.CacheGetEntityTagHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/caches/{cacheId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.cacheId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CacheContract,
      headersMapper: Mappers.CacheGetHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/caches/{cacheId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.cacheId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch0,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.CacheContract,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CacheContract,
      headersMapper: Mappers.CacheCreateOrUpdateHeaders
    },
    201: {
      bodyMapper: Mappers.CacheContract,
      headersMapper: Mappers.CacheCreateOrUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/caches/{cacheId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.cacheId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch1,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.CacheUpdateParameters,
      required: true
    }
  },
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/caches/{cacheId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.cacheId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch1,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByServiceNextOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CacheCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
