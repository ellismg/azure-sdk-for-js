// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { KeyCredential } from "@azure/core-auth";
import { PipelineOptions, createPipelineFromOptions, RestResponse } from "@azure/core-http";

import { createHmac } from "crypto";
import { v4 as uuidv4 } from "uuid";

import { createEventGridAzureKeyCredentialPolicy } from "./azureKeyCredentialPolicy";
import { DEFAULT_SERVICE_API_VERSION, SDK_VERSION } from "./constants";
import { GeneratedClient } from './generated/generatedClient';

export interface EventGridMessage {
  type: string
  time?: Date
  id?: string
  topic?: string
  subject: string
  dataVersion: string
  data: any
}

export interface CloudEventMessage {
  type: string
  source: string
  dataContentType?: string
  data?: any
  id?: string
  time?: Date
  subject?: string
}

export class EventGridClient {
    public readonly endpointUrl: string;
    private readonly client: GeneratedClient;

    constructor(endpointUrl: string, credential: KeyCredential, options: PipelineOptions = {}) {
        this.endpointUrl = endpointUrl;

        const libInfo = `azsdk-js-eventgrid/${SDK_VERSION}`;

        const pipelineOptions = { ...options };
      
        if (!pipelineOptions.userAgentOptions) {
          pipelineOptions.userAgentOptions = {};
        }
        if (pipelineOptions.userAgentOptions.userAgentPrefix) {
          pipelineOptions.userAgentOptions.userAgentPrefix = `${pipelineOptions.userAgentOptions.userAgentPrefix} ${libInfo}`;
        } else {
          pipelineOptions.userAgentOptions.userAgentPrefix = libInfo;
        }
      
        const authPolicy = createEventGridAzureKeyCredentialPolicy(credential);
        const pipeline = createPipelineFromOptions(options, authPolicy);
     
        this.client = new GeneratedClient(DEFAULT_SERVICE_API_VERSION, pipeline);    
    }

    /**
     * Publishes events in the Event Grid scheama. The topic must be configured to expect events in the Event Grid schema format.
     * 
     * @param message One or more events to publish
     */
    sendEvents(message: EventGridMessage | EventGridMessage[]): Promise<RestResponse> {
        if (!Array.isArray(message)) {
          message = [message];
        }

        const events = message.map(msg => {
          return {
            eventType: msg.type,
            eventTime: msg.time ?? new Date(),
            topic: msg.topic,
            id: msg.id ?? uuidv4(),
            subject: msg.subject,
            data: msg.data,
            dataVersion: msg.dataVersion,            
          };
        });

      return this.client.publishEvents(this.endpointUrl, events);
    }

    /**
     * Publishes events in the Cloud Events 1.0 scheama. The topic must be configured to expect events in the Cloud Events 1.0 schema format.
     * 
     * @param message One or more events to publish
     */    
    sendCloudEvents(message: CloudEventMessage | CloudEventMessage[]): Promise<RestResponse> {
      if (!Array.isArray(message)) {
        message = [message];
      }
  
      const events = message.map(msg => {
        return {
          id: msg.id ?? uuidv4(),
          source: msg.source,
          data: msg.data,
          type: msg.type,
          time: msg.time ?? new Date(),
          specversion: "1.0",
          datacontenttype: msg.dataContentType ?? "application/json",
        };
      });
  
      return this.client.publishCloudEventEvents(this.endpointUrl, events);    
    }

    /**
     * Generate a shared access signature, which allows a client to send events to an Event Grid Topic for a limited period of time.
     *  
     * @param endpointUrl The EventGrid endpoint to generate a SharedAccessSignature for, e.g. https://eg-topic.westus2-1.eventgrid.azure.net/api/events
     * @param expiresOn The time at which the shared signature is no longer valid.
     * @param key They shared key to use to create the signature.
     * @param apiVersion The version of the EventGrid API.
     */
    static generateSharedAccessSignature(endpointUrl: string, expiresOnUtc: Date, key: string, apiVersion = DEFAULT_SERVICE_API_VERSION) {
      const expiresOnUtcDateString = `${expiresOnUtc.getUTCMonth()}/${expiresOnUtc.getUTCDate()}/${expiresOnUtc.getUTCFullYear()}`;
      const expiresOnHour = expiresOnUtc.getUTCHours() == 0 ? 12 : (expiresOnUtc.getUTCHours() % 12);
      const expiresOnUtcTimeString = `${expiresOnHour}:${expiresOnUtc.getUTCMinutes().toString().padStart(2, "0")}:${expiresOnUtc.getUTCSeconds().toString().padStart(2, "0")} ${expiresOnUtc.getUTCHours() >= 13 ? "PM" : "AM"}`;

      const expiresOnString = `${expiresOnUtcDateString} ${expiresOnUtcTimeString}`;
      const unsignedSas = `r=${encodeURIComponent(`${endpointUrl}?apiVersion=${apiVersion}`)}&e=${encodeURIComponent(expiresOnString)}`;
      const digest = createHmac("sha256", Buffer.from(key, 'base64')).update(unsignedSas).digest().toString('base64');

      return `${unsignedSas}&s=${encodeURIComponent(digest)}`;
    }
}