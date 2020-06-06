let nock = require('nock');

module.exports.hash = "9a1c4dea4e27920c6390b0b60387765f";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://matell-eg-topic-ce.westus2-1.eventgrid.azure.net:443', {"encodedQueryParams":true})
  .post('/api/events', [{"id":"3165e5dc-cb97-4b36-83a0-96ccea6fc7f3","source":"/earth/unitedstates/washington/kirkland/finnhill","data":{"hello":"world"},"type":"matell.sample.handcraffted","time":"2020-06-06T00:43:48.822Z","specversion":"1.0","datacontenttype":"application/json"}])
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
  '25c07c39-1df9-490c-8ac2-4fd0a458de7d',
  'Date',
  'Sat, 06 Jun 2020 00:43:49 GMT'
]);
