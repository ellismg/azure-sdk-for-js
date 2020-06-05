let nock = require('nock');

module.exports.hash = "338378c79f463c83e19b8d9c5f3e1a07";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint', {"encodedQueryParams":true})
  .post('/api/events', [{"id":"5303bc8d-3d0c-4158-ab86-b105234d9e8e","subject":"Single","data":{"hello":"world"},"eventType":"MatEll.Events.Dummy","eventTime":"2020-06-05T01:45:12.666Z","dataVersion":"1.0"}])
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
  '93cdb9e6-30b6-4f74-af64-c3bccf9b637c',
  'Date',
  'Fri, 05 Jun 2020 01:45:14 GMT'
]);
