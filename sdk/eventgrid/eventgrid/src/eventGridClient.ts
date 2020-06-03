// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
    PipelineOptions,
    createPipelineFromOptions,
    RestResponse,
} from "@azure/core-http";

import { createEventGridAzureKeyCredentialPolicy } from "./azureKeyCredentialPolicy";

import { DEFAULT_SERVICE_API_VERSION, SDK_VERSION } from "./constants";

import { KeyCredential } from "@azure/core-auth";
import { GeneratedClient } from './generated/generatedClient';

import { v4 as uuidv4 } from "uuid";

export interface EventGridMessage {
  type: string
  time?: Date
  id?: string
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

        this.client = new GeneratedClient(DEFAULT_SERVICE_API_VERSION, buildPipepline(credential, options));    
    }

    sendEvents(message: EventGridMessage | EventGridMessage[]): Promise<RestResponse> {
        if (!Array.isArray(message)) {
          message = [message];
        }

        const events = message.map(msg => {
          return {
            eventType: msg.type,
            eventTime: msg.time ?? new Date(),
            id: msg.id ?? uuidv4(),
            subject: msg.subject,
            data: msg.data,
            dataVersion: msg.dataVersion,            
          };
        });

      return this.client.publishEvents(this.endpointUrl, events);
    }
}

export class EventGridDomainClient {
  public readonly endpointUrl: string;
  public readonly topicName: string;  
  private readonly client: GeneratedClient;

  constructor(endpointUrl: string, topicName: string, credential: KeyCredential, options: PipelineOptions = {}) {
    this.endpointUrl = endpointUrl;
    this.topicName = topicName;
    this.client = new GeneratedClient(DEFAULT_SERVICE_API_VERSION, buildPipepline(credential, options));
  }

  sendEvents(message: EventGridMessage | EventGridMessage[]): Promise<RestResponse> {
      if (!Array.isArray(message)) {
        message = [message];
      }

      const events = message.map(msg => {
        return {
          eventType: msg.type,
          eventTime: msg.time ?? new Date(),
          id: msg.id ?? uuidv4(),
          topic: this.topicName,
          subject: msg.subject,
          data: msg.data,
          dataVersion: msg.dataVersion,            
        };
      });

    return this.client.publishEvents(this.endpointUrl, events);
  }
}

export class EventGridCloudEventClient {
  public readonly topicUrl: string;

  private readonly client: GeneratedClient;

  constructor(topicUrl: string, credential: KeyCredential, options: PipelineOptions = {}) {
      this.topicUrl = topicUrl;

      this.client = new GeneratedClient(DEFAULT_SERVICE_API_VERSION, buildPipepline(credential, options));    
  }

  sendEvents(message: CloudEventMessage | CloudEventMessage[]): Promise<RestResponse> {
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

    return this.client.publishCloudEventEvents(this.topicUrl, events);    
  }
}

function buildPipepline(credential: KeyCredential, options: PipelineOptions) {
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
  return createPipelineFromOptions(options, authPolicy);
}