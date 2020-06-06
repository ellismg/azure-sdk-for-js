let nock = require('nock');

module.exports.hash = "07e60ee7997d28baea42088d59c3aff7";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint', {"encodedQueryParams":true})
  .post('/api/events', [{"id":"7cb8ed7f-e3ca-467b-8365-83de5e33bdf7","subject":"Multiple 1","data":{"hello":"world"},"eventType":"MatEll.Events.Dummy","eventTime":"2020-06-06T00:43:48.315Z","dataVersion":"1.0"},{"id":"a0370b21-3ede-4efe-9674-73cc1288ecb9","subject":"Multiple 2","data":{"hello":"world"},"eventType":"MatEll.Events.Dummy","eventTime":"2020-06-06T00:43:48.315Z","dataVersion":"1.0"}])
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
  '691ce928-f8ea-40d6-8051-784a111f4454',
  'Date',
  'Sat, 06 Jun 2020 00:43:48 GMT'
]);
