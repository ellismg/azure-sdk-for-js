// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { assert } from "chai";

import { Recorder } from "@azure/test-utils-recorder";

import { createRecordedClient, testEnv } from "./utils/recordedClient";
import {
  EventGridClient,
  AzureKeyCredential,
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
      const res =  await client.sendEvents([{
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
});