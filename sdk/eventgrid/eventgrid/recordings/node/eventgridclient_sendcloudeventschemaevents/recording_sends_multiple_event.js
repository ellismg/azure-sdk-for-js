let nock = require('nock');

module.exports.hash = "cd9b84c81af42c3c45825ce06453e366";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://matell-eg-topic-ce.westus2-1.eventgrid.azure.net:443', {"encodedQueryParams":true})
  .post('/api/events', [{"id":"4ec5f418-d59f-4f12-93f3-f24d30efd6bf","source":"/earth/unitedstates/washington/kirkland/finnhill","data":{"hello":"world"},"type":"matell.sample.handcraffted","time":"2020-06-06T00:43:48.948Z","specversion":"1.0","datacontenttype":"application/json"},{"id":"3dff2c15-a839-4466-954e-2c1b7c1eda8f","source":"/earth/unitedstates/washington/kirkland/finnhill","data":{"hello":"world"},"type":"matell.sample.handcraffted","time":"2020-06-06T00:43:48.948Z","specversion":"1.0","datacontenttype":"application/json"}])
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
  'c58e2ddf-e21a-450a-830f-a99696340afb',
  'Date',
  'Sat, 06 Jun 2020 00:43:49 GMT'
]);
