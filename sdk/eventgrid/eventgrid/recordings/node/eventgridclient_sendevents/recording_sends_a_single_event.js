let nock = require('nock');

module.exports.hash = "338378c79f463c83e19b8d9c5f3e1a07";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint', {"encodedQueryParams":true})
  .post('/api/events', [{"id":"4e711247-2355-4e4c-b2ca-ee39d28770ed","subject":"Single","data":{"hello":"world"},"eventType":"MatEll.Events.Dummy","eventTime":"2020-06-05T23:16:09.019Z","dataVersion":"1.0"}])
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
  'ccece721-9097-45d6-9ad6-c37c522c3742',
  'Date',
  'Fri, 05 Jun 2020 23:16:09 GMT'
]);
