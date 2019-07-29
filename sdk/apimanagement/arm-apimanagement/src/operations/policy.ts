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
import * as Mappers from "../models/policyMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a Policy. */
export class Policy {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a Policy.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all the Global Policy definitions of the Api Management service.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyListByServiceResponse>
   */
  listByService(resourceGroupName: string, serviceName: string, options?: coreHttp.RequestOptionsBase): Promise<Models.PolicyListByServiceResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, callback: coreHttp.ServiceCallback<Models.PolicyCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.PolicyCollection>): void;
  listByService(resourceGroupName: string, serviceName: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.PolicyCollection>, callback?: coreHttp.ServiceCallback<Models.PolicyCollection>): Promise<Models.PolicyListByServiceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        options
      },
      listByServiceOperationSpec,
      callback) as Promise<Models.PolicyListByServiceResponse>;
  }

  /**
   * Gets the entity state (Etag) version of the Global policy definition in the Api Management
   * service.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyGetEntityTagResponse>
   */
  getEntityTag(resourceGroupName: string, serviceName: string, options?: coreHttp.RequestOptionsBase): Promise<Models.PolicyGetEntityTagResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The optional parameters
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  getEntityTag(resourceGroupName: string, serviceName: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.PolicyGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        options
      },
      getEntityTagOperationSpec,
      callback) as Promise<Models.PolicyGetEntityTagResponse>;
  }

  /**
   * Get the Global policy definition of the Api Management service.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyGetResponse>
   */
  get(resourceGroupName: string, serviceName: string, options?: Models.PolicyGetOptionalParams): Promise<Models.PolicyGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, callback: coreHttp.ServiceCallback<Models.PolicyContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, options: Models.PolicyGetOptionalParams, callback: coreHttp.ServiceCallback<Models.PolicyContract>): void;
  get(resourceGroupName: string, serviceName: string, options?: Models.PolicyGetOptionalParams | coreHttp.ServiceCallback<Models.PolicyContract>, callback?: coreHttp.ServiceCallback<Models.PolicyContract>): Promise<Models.PolicyGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PolicyGetResponse>;
  }

  /**
   * Creates or updates the global policy configuration of the Api Management service.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters The policy contents to apply.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, parameters: Models.PolicyContract, options?: Models.PolicyCreateOrUpdateOptionalParams): Promise<Models.PolicyCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters The policy contents to apply.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, parameters: Models.PolicyContract, callback: coreHttp.ServiceCallback<Models.PolicyContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters The policy contents to apply.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, parameters: Models.PolicyContract, options: Models.PolicyCreateOrUpdateOptionalParams, callback: coreHttp.ServiceCallback<Models.PolicyContract>): void;
  createOrUpdate(resourceGroupName: string, serviceName: string, parameters: Models.PolicyContract, options?: Models.PolicyCreateOrUpdateOptionalParams | coreHttp.ServiceCallback<Models.PolicyContract>, callback?: coreHttp.ServiceCallback<Models.PolicyContract>): Promise<Models.PolicyCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.PolicyCreateOrUpdateResponse>;
  }

  /**
   * Deletes the global policy configuration of the Api Management Service.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serviceName: string, ifMatch: string, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, ifMatch: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, ifMatch: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, serviceName: string, ifMatch: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        ifMatch,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const listByServiceOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/policies",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
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
      bodyMapper: Mappers.PolicyCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getEntityTagOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "HEAD",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/policies/{policyId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.policyId,
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
      headersMapper: Mappers.PolicyGetEntityTagHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/policies/{policyId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.policyId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.format0,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PolicyContract,
      headersMapper: Mappers.PolicyGetHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/policies/{policyId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.policyId,
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
      ...Mappers.PolicyContract,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PolicyContract,
      headersMapper: Mappers.PolicyCreateOrUpdateHeaders
    },
    201: {
      bodyMapper: Mappers.PolicyContract,
      headersMapper: Mappers.PolicyCreateOrUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/policies/{policyId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.policyId,
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
