let nock = require('nock');

module.exports.hash = "99f85cf3e2bb5efbeb840ea9d688e6b9";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint', {"encodedQueryParams":true})
  .post('/api/events', [{"id":"f4584567-751c-485d-8c52-d86be96850ee","subject":"Multiple 1","data":{"hello":"world"},"eventType":"MatEll.Events.Dummy","eventTime":"2020-06-05T01:45:13.001Z","dataVersion":"1.0"},{"id":"0049b367-36a7-45b9-9e49-9263c0f40e21","subject":"Multiple 2","data":{"hello":"world"},"eventType":"MatEll.Events.Dummy","eventTime":"2020-06-05T01:45:13.001Z","dataVersion":"1.0"}])
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
  'b38be1ac-56ce-46af-8aa0-59ce5f671521',
  'Date',
  'Fri, 05 Jun 2020 01:45:14 GMT'
]);
