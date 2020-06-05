let nock = require('nock');

module.exports.hash = "07e60ee7997d28baea42088d59c3aff7";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint', {"encodedQueryParams":true})
  .post('/api/events', [{"id":"31e07698-e7bb-4c5e-a5bf-65b1d3d1406b","subject":"Multiple 1","data":{"hello":"world"},"eventType":"MatEll.Events.Dummy","eventTime":"2020-06-05T23:16:09.432Z","dataVersion":"1.0"},{"id":"447bfffb-d7b5-4c19-81b1-2c96ba1ed57e","subject":"Multiple 2","data":{"hello":"world"},"eventType":"MatEll.Events.Dummy","eventTime":"2020-06-05T23:16:09.432Z","dataVersion":"1.0"}])
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
  '81041263-7bcf-4c05-9c99-df8f553b8fd2',
  'Date',
  'Fri, 05 Jun 2020 23:16:09 GMT'
]);
