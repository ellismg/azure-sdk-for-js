let nock = require('nock');

module.exports.hash = "a98e9ce786f10a17e97f7dfce8355fc1";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://matell-eg-custom-topic.westus2-1.eventgrid.azure.net:443', {"encodedQueryParams":true})
  .post('/api/events', [{"ver":"1.0","typ":"MatEll.Events.Dummy","sub":"Multiple 1","payload":{"test":"data"}},{"ver":"1.0","typ":"MatEll.Events.Dummy","sub":"Multiple 2","payload":{"test":"data"}}])
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
  '923a3922-d542-4f05-a800-33fcf2df813d',
  'Date',
  'Sat, 06 Jun 2020 00:43:48 GMT'
]);
