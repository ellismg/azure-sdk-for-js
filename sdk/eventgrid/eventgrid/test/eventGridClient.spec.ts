// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  EventGridClient, AzureKeyCredential, EventGridCloudEventClient, EventGridSharedAccessTokenCredential
} from "../src/index";

describe("EventGridClient", function() {
  if (!process.env["AZURE_EVENT_GRID_TOPIC_KEY"] || !process.env["AZURE_EVENT_GRID_TOPIC_ENDPOINT"]) {
    throw new Error("AZURE_EVENT_GRID_TOPIC_KEY and AZURE_EVENT_GRID_TOPIC_ENDPOINT must be set before running this test.")
  }

  let client: EventGridClient = new EventGridClient(process.env["AZURE_EVENT_GRID_TOPIC_ENDPOINT"], new EventGridSharedAccessTokenCredential(process.env["AZURE_EVENT_GRID_TOPIC_KEY"]));

  this.timeout(10000);

  describe("#sendEvents", () => {
    it("sends a single event", async () => {
      return await client.sendEvents({
          dataVersion: "1.0",
          data: {
              hello: "world",
          },
          type: "MatEll.Events.Dummy",
          subject: "Single",          
      });
    });

    it("sends multiple event", async () => {
        return await client.sendEvents([{
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
      });    
  });
});

describe("CloudEventClient", function() {
  if (!process.env["AZURE_EVENT_GRID_DOMAIN_KEY"] || !process.env["AZURE_EVENT_GRID_DOMAIN_ENDPOINT"]) {
    throw new Error("AZURE_EVENT_GRID_DOMAIN_KEY and AZURE_EVENT_GRID_DOMAIN_ENDPOINT must be set before running this test.")
  }

  let client: EventGridCloudEventClient = new EventGridCloudEventClient(process.env["AZURE_EVENT_GRID_DOMAIN_ENDPOINT"], new AzureKeyCredential(process.env["AZURE_EVENT_GRID_DOMAIN_KEY"]));

  this.timeout(10000);

  describe("#sendEvents", () => {
    it("sends a single event", async () => {
      return await client.sendEvents({
          dataContentType: "application/json",
          source:"/earth/unitedstates/washington/redmond/building18",
          type: "matell.sample.handcraffted",
          data: {
            hello: "world"
          }                    
      });
    });

    it("sends multiple event", async () => {
        return await client.sendEvents([{
          dataContentType: "application/json",
          source:"/earth/unitedstates/washington/redmond/building18",
          type: "matell.sample.handcraffted",
          subject: "Mutlipel 1",
          data: {
            hello: "world"
          }            
        },
        {
          dataContentType: "application/json",
          source:"/earth/unitedstates/washington/redmond/building18",
          type: "matell.sample.handcraffted",
          subject: "Multiple 2",
          data: {
            hello: "world"
          }              
        }]);
      });    
  });
});
