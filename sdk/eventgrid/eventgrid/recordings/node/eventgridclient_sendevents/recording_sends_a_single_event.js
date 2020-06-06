let nock = require('nock');

module.exports.hash = "338378c79f463c83e19b8d9c5f3e1a07";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint', {"encodedQueryParams":true})
  .post('/api/events', [{"id":"7a59421f-f2eb-490c-9100-f6b0d28a5812","subject":"Single","data":{"hello":"world"},"eventType":"MatEll.Events.Dummy","eventTime":"2020-06-06T00:43:48.030Z","dataVersion":"1.0"}])
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
  '7a7b8161-aabd-4b73-aff2-8e6b5f5ca111',
  'Date',
  'Sat, 06 Jun 2020 00:43:48 GMT'
]);
