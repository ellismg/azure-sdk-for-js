// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { assert } from "chai";

import { isNode } from "@azure/core-http"
import { Recorder } from "@azure/test-utils-recorder";

import { createRecordedClient, testEnv } from "./utils/recordedClient";
import {
  AzureKeyCredential,
  EventGridClient,
} from "../src/index";

describe("EventGridClient", function() {
  let recorder: Recorder;
  let client: EventGridClient;

  this.timeout(10000);

  beforeEach(function() {
    ({ client, recorder } = createRecordedClient(this, new AzureKeyCredential(testEnv.EVENT_GRID_API_KEY)));
  });

  afterEach(() => {
    recorder.stop();
  });

  describe("#sendEvents", () => {
    it("sends a single event", async () => {
      const res =  await client.sendEvents({
        dataVersion: "1.0",
        data: {
            hello: "world",
        },
        type: "MatEll.Events.Dummy",
        subject: "Single",          
      });

      assert.equal(res._response.status, 200);
    });

    it("sends multiple event", async () => {
      const res =  await client.sendEvents([
        {
          dataVersion: "1.0",
          data: {
              hello: "world",
          },
          type: "MatEll.Events.Dummy",
          subject: "Multiple 1",          
        },
        {
          dataVersion: "1.0",
          data: {
              hello: "world",
          },
          type: "MatEll.Events.Dummy",
          subject: "Multiple 2",                 
        }]);
        
      assert.equal(res._response.status, 200);
    });
  });

  // TODO(matell): generateSharedAccessSigniture used `createHmac` which is specific to node. Is this the correct way to author the tests
  // such that they only run on node, or is there something more idomatic?
  if (isNode) {
    describe("#generateSharedAccessSigniture", () => {
      // This is not a real key, it's the base64 encoding of "this is not a real EventGrid key", which happens to be the same
      // number of bytes as an actual EventGrid Access Key.
      const key = "dGhpcyBpcyBub3QgYSByZWFsIEV2ZW50R3JpZCBrZXk=";
  
      it("generates the correct signiture", () => {
        const sig = EventGridClient.generateSharedAccessSignature("https://eg-topic.westus-2.eventgrid.azure.net/api/events", new Date(2020, 0, 1, 0, 0, 0), key);
        assert.equal(sig, "r=https%3A%2F%2Feg-topic.westus-2.eventgrid.azure.net%2Fapi%2Fevents%3FapiVersion%3D2018-01-01&e=1%2F1%2F2020%208%3A00%3A00%20AM&s=PL2XXgj4Fimu3LcgH5aIaYTG3MefvrmcZZ%2BLPBsARrc%3D");
      });
  
      it("allows an explicit API version", ()=> {
        const sig = EventGridClient.generateSharedAccessSignature("https://eg-topic.westus-2.eventgrid.azure.net/api/events", new Date(2020, 0, 1, 0, 0, 0), key, "2020-01-01");
        assert.equal(sig, "r=https%3A%2F%2Feg-topic.westus-2.eventgrid.azure.net%2Fapi%2Fevents%3FapiVersion%3D2020-01-01&e=1%2F1%2F2020%208%3A00%3A00%20AM&s=x42RIaO%2F1beL0b4%2F4hoA8nrMgPjgEgdMkZUI9I%2BcsxM%3D");
      });
    });  
  }
});