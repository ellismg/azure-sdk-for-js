let nock = require('nock');

module.exports.hash = "c36eef7017932324d6ef9f7ddf4e720f";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://matell-eg-custom-topic.westus2-1.eventgrid.azure.net:443', {"encodedQueryParams":true})
  .post('/api/events', [{"ver":"1.0","typ":"MatEll.Events.Dummy","sub":"Single","payload":{"test":"data"}}])
  .query(true)
  .reply(200, "", [
  'Content-Length',
  '0',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'api-supported-versions',
  '2018-01-01',
  'x-ms-request-id',
  '9486e5b2-01ab-48df-a9de-b7b128331071',
  'Date',
  'Sat, 06 Jun 2020 00:43:48 GMT'
]);
