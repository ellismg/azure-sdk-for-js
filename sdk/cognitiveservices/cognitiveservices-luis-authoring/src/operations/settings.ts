/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/settingsMappers";
import * as Parameters from "../models/parameters";
import { LUISAuthoringClientContext } from "../lUISAuthoringClientContext";

/** Class representing a Settings. */
export class Settings {
  private readonly client: LUISAuthoringClientContext;

  /**
   * Create a Settings.
   * @param {LUISAuthoringClientContext} client Reference to the service client.
   */
  constructor(client: LUISAuthoringClientContext) {
    this.client = client;
  }

  /**
   * Gets the settings in a version of the application.
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param [options] The optional parameters
   * @returns Promise<Models.SettingsListResponse>
   */
  list(
    appId: string,
    versionId: string,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.SettingsListResponse>;
  /**
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param callback The callback
   */
  list(
    appId: string,
    versionId: string,
    callback: msRest.ServiceCallback<Models.AppVersionSettingObject[]>
  ): void;
  /**
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(
    appId: string,
    versionId: string,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.AppVersionSettingObject[]>
  ): void;
  list(
    appId: string,
    versionId: string,
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AppVersionSettingObject[]>,
    callback?: msRest.ServiceCallback<Models.AppVersionSettingObject[]>
  ): Promise<Models.SettingsListResponse> {
    return this.client.sendOperationRequest(
      {
        appId,
        versionId,
        options
      },
      listOperationSpec,
      callback
    ) as Promise<Models.SettingsListResponse>;
  }

  /**
   * Updates the settings in a version of the application.
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param listOfAppVersionSettingObject A list of the updated application version settings.
   * @param [options] The optional parameters
   * @returns Promise<Models.SettingsUpdateResponse>
   */
  update(
    appId: string,
    versionId: string,
    listOfAppVersionSettingObject: Models.AppVersionSettingObject[],
    options?: msRest.RequestOptionsBase
  ): Promise<Models.SettingsUpdateResponse>;
  /**
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param listOfAppVersionSettingObject A list of the updated application version settings.
   * @param callback The callback
   */
  update(
    appId: string,
    versionId: string,
    listOfAppVersionSettingObject: Models.AppVersionSettingObject[],
    callback: msRest.ServiceCallback<Models.OperationStatus>
  ): void;
  /**
   * @param appId The application ID.
   * @param versionId The version ID.
   * @param listOfAppVersionSettingObject A list of the updated application version settings.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(
    appId: string,
    versionId: string,
    listOfAppVersionSettingObject: Models.AppVersionSettingObject[],
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.OperationStatus>
  ): void;
  update(
    appId: string,
    versionId: string,
    listOfAppVersionSettingObject: Models.AppVersionSettingObject[],
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationStatus>,
    callback?: msRest.ServiceCallback<Models.OperationStatus>
  ): Promise<Models.SettingsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        appId,
        versionId,
        listOfAppVersionSettingObject,
        options
      },
      updateOperationSpec,
      callback
    ) as Promise<Models.SettingsUpdateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "apps/{appId}/versions/{versionId}/settings",
  urlParameters: [Parameters.endpoint, Parameters.appId, Parameters.versionId0],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AppVersionSettingObject"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "apps/{appId}/versions/{versionId}/settings",
  urlParameters: [Parameters.endpoint, Parameters.appId, Parameters.versionId0],
  requestBody: {
    parameterPath: "listOfAppVersionSettingObject",
    mapper: {
      required: true,
      serializedName: "listOfAppVersionSettingObject",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "Composite",
            className: "AppVersionSettingObject"
          }
        }
      }
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
