let nock = require('nock');

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .put('/secrets/CRUDSecretName-canbackupasecret-')
  .query(true)
  .reply(401, {"error":{"code":"Unauthorized","message":"Request is missing a Bearer or PoP token."}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '87',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'WWW-Authenticate',
  'Bearer authorization="https://login.windows.net/azure_tenant_id", resource="https://vault.azure.net"',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '2ff0acb7-93ab-46d3-aa95-d9f2a032dc5a',
  'x-ms-keyvault-service-version',
  '1.1.0.879',
  'x-ms-keyvault-network-info',
  'addr=40.71.194.238;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 04 Oct 2019 23:22:19 GMT',
  'Connection',
  'close' ]);


nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3600,"ext_expires_in":3600,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  '8f7b44f2-bbd4-41fc-bfea-6992d64c4700',
  'x-ms-ests-server',
  '2.1.9485.10 - NCUS ProdSlices',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=AuxUAU4VwThPg7_C4r4SBk4_aSJHAQAAACvLKdUOAAAA; expires=Sun, 03-Nov-2019 23:22:19 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; HttpOnly',
  'Date',
  'Fri, 04 Oct 2019 23:22:19 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .put('/secrets/CRUDSecretName-canbackupasecret-', {"value":"RSA"})
  .query(true)
  .reply(200, {"value":"RSA","id":"https://keyvault_name.vault.azure.net/secrets/CRUDSecretName-canbackupasecret-/fc9af3436f9a48868d3f5bcb81874d42","attributes":{"enabled":true,"created":1570231340,"updated":1570231340,"recoveryLevel":"Recoverable+Purgeable"}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '3a7d82c5-86f4-4ddf-8012-dceb1784b4a9',
  'x-ms-keyvault-service-version',
  '1.1.0.879',
  'x-ms-keyvault-network-info',
  'addr=40.71.194.238;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 04 Oct 2019 23:22:19 GMT',
  'Connection',
  'close',
  'Content-Length',
  '260' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .post('/secrets/CRUDSecretName-canbackupasecret-/backup')
  .query(true)
  .reply(401, {"error":{"code":"Unauthorized","message":"Request is missing a Bearer or PoP token."}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '87',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'WWW-Authenticate',
  'Bearer authorization="https://login.windows.net/azure_tenant_id", resource="https://vault.azure.net"',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  'f1ef8efa-e414-4232-bff9-48a3ff039c34',
  'x-ms-keyvault-service-version',
  '1.1.0.879',
  'x-ms-keyvault-network-info',
  'addr=40.71.194.238;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 04 Oct 2019 23:22:19 GMT',
  'Connection',
  'close' ]);


nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3600,"ext_expires_in":3600,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  '910cb382-302b-4146-84aa-688bdfea4900',
  'x-ms-ests-server',
  '2.1.9485.10 - NCUS ProdSlices',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=AuxUAU4VwThPg7_C4r4SBk4_aSJHAgAAACvLKdUOAAAA; expires=Sun, 03-Nov-2019 23:22:20 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; HttpOnly',
  'Date',
  'Fri, 04 Oct 2019 23:22:20 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .post('/secrets/CRUDSecretName-canbackupasecret-/backup')
  .query(true)
  .reply(200, {"value":"KUF6dXJlS2V5VmF1bHRTZWNyZXRCYWNrdXBWMS5taWNyb3NvZnQuY29tZXlKcmFXUWlPaUkwTXpnMVlqQTNZaTFrTlRRM0xUUXlaVFV0WVdVNVpTMDJNVEJrWXpNNVpHWmhaamdpTENKaGJHY2lPaUpTVTBFdFQwRkZVQ0lzSW1WdVl5STZJa0V4TWpoRFFrTXRTRk15TlRZaWZRLlJkb1dIQ1hHQ29pR1U3elpuQktmNEJWNWwxdnpaMDB6bzVvb0tIVFNmMUxab0oySWhfR19jMndBaXJSQThjb20wMmdQOEM0NEVqS2JnNmFqWVNBUTg3UmRhRDMzZXlNdGtLWkx5Z0JTeHZkUlVKdk04aUF0U2RHUC0tQUVRZE1pSVBrU2RrWVhUVmRpY0tURXVMWkV1V1BneHB1clYwYWF1b2MwSEt0TUsyTnFJekZJMUhQTERTZnRLcUpESUdFdUp6emMtbWpLZXJQWnlWRTZDc1RldWhjNGRsNldLdEUySy1IVHRBM2haMFJUWWR0c2dvazh0aVpRRy1UTjVYSDREaDB1dE9ORi04SlJ6SzhvZXVSaEFabjFMUVVKN1VrX2ctWTFYdVpGd1RpUWpobmk0SzFBSTFXaWVoZ2puTndxYXhZdkp3VTRwRVZBRUlQeWtSam0wdy5iM19adWFaX0hqekllblI1NGpSZDNRLjdRajY1Y3ZVeVRwd0ppQVBvTWVMUDJSdFdxRDl2Vi1iVjJNTzhtOGdmdW52V0k4ODlaS3VWdUROUWtjSllIN2cxVFlsVFV3NjBFN1MwaUg1MkNKbG5GVHVMMHdKLU5IZ2ZScWYtM2t2dGlnRGFlUVZDM1g0ZHQwS0ExYXRScEUyUnZRM25jMmh5NW9vamJWcTNkQmNyUHRRcTJJWklvaGNaYnd1dzdZN2hWSlY0Sm00SEMzWGJTT2poUUhlM3N0N3FYc3BWTU83NUdhTGI5YlJoTk9qNjRZZzhzZUxsVngzeUpMMTJCVEZ3dUprcVFRY05rMDFEU1lvOS1TTm1YNTFMbVN0dW9iS3pyQmlBWDJnYWgweERtR3g2NW8yeDBWMVFoOU1RQmU1M1l6c1lyVlFVaEtqVENNRlhBYkFGcWFjNXRCRUl5c08yMjJTai02S21xVnNYYXktRTlEd3ZWSjNRYlE3eFFHTDlra1VkNkJIT19nLWhaUjNkMEVOLXNCNHFRVWcyRnFWb3A0TmZOMlFrT2huN3dCcEg4U1FWQXJ0ejZxVlVZU05fN1FfOW1QRXhERl9Ba3hzbktPSUlCUS1fUV9UbGEwTVZYVFBSOEZHXzJ0eDdFcnJBMjBCNUZJTm9MX2tTYmZuMHZSbXhEeXRDOEZueDdiOTRNWk12QTVHWVBfZnc2aEdfaHVOMC1yU1dEN1dpM0NSSWV4SHR1bUxnNkdKZlBvanNpMElqQmdBU3BUQ3dJZlNITUxqa1Q1ZFRpeUk4RnltdHJ2OE5IbUFVMVYycHZ6WG1Mc0Vjek1OeDBvTFpid0VsM0czUWFkU0lIdWg0d1pjN252R3ZMNlhyUG04QTl0YWZnTnlvQ2ZkVXpGcktzWmNJNkZuTUlOVDh6QjdFdFBxRDhxVFBmT0RhN2tvUGl3U0tHWGRpR0NOUU5rb0xuRmdEdU5SWF9ZTG5uRFNNLXFkT3lQQ0J0WXZlU25KVVJhbElHSFQzR0xDLWJHUWlUUS1waWR3NThGLVhEcE4tTG5XYWREb1ktdHVtNnpVV0tEd3NGREhXb2hUTU5XNHJqcGIwYS1ibGRpLU51dTA2RkxTcmhhUlJ0MnFWVlJEdFBxbWUwOWVsQnh1ajh5SnlrbDRTZjhtSjZxNkRkaVl6WGdnQl9naE1rRkpxMjlnMEdjSWpaVGlPeHNxVlg5UVBJRU91VkR5UjFES0FKZGVJQ1daSXpDcy1NaVZOVHFJbU9Tc0dNMEVCTi1pSXRCcks2VUVFTFNxazRGMkRQcURjTUUwMmx5R004R0tjWFNIU0F2S290MHNEWWNZMkR4OGxpNEZxRnNQY3ZFc1VtbUExZFVEakVRQloxMzVCSmhjUjRSdDBOMkh6OHh0RG8xc2sydllBSHRoSVBNb3hwc2h0d3V2T1pZWG5VLUlJdVJyemd2U291b3p0X2JOMHVKNVZKemFYRzc2SzNUZ3ZPazcyRFppRVhkdXJUbEJ4WlN2cTZyRk9UYnFLX0s5RFNrM0ZHZW9qVEtuUHBKTEFEXzJ2TGw3aEQtWlNYNFJkamduUEEtdWMteGxpUUNjbDNhcUtmWHdOMDR1NkVPMkJyMlZjYUM0MjJ5bXNhcV9KV1RMZ1R2R3pGa2ZIQ0lRYlF6eFJicnFfRmhnMG4wM1ZBSjRCS3hLSkIzYjZZZ1hfcGxMUWxETXBPTFhUaVc1RjNaZjZuWEtTX0s5dzQtMDNmV0FZdzdwUHVSQWV4S0JXZkFqOXMweHM2X1JmaTB2c3hSSDgzWVdiS3AtMkItMlByTmxMVHcxSXpoSm5CNWlZX0NBZUd1UEVkYjFGMmJvNWg4VUhybXpQdGdPa3VXNWEtNlh4NTZZNXlsNEdYSlphaU1oRDgxNTdrdUE0RzBUaExNQ0M5Z1hCOF81ZkhQNnNIenpxZVItSUcwbFUxeEhWcFZUd0o3MTQzVDlYRHVPYm5kZHM0RXJpMG13NlBWNkJkMVR5Q3d4YndEemlnTW5CX2V1MEtzMXpQUUpsd3Uwb25MR0NGUjZORFcwcjB2RzUwazhRUkhSejN4eWM1X0U4VWhXeFlyUGMycVlKa0pSOU9lUTkwQ2dLQ0JUV2kxdi1XTlIxSVJObzV5RTZwRlNZeHRzZWM4ckg3UWk2d1g0OHJobmtWUGR5LVdwRl9uNjRhNkcyZU8tX3R0RzNXLWl6SThJcGppcHc0ekVLNEF5cFFldVU3ZS01TXRfWEdlZTVubjFWaXdrVlBhamdGSzBmS1ZVWVgxTVRLWXVPQ3JXY2x1d2h3MUJhdkR6cTVzV2JJaUtlbnAtVWZBRThIbzRtRXQwNDA4OWU0RW52aFhBcGJIVEkyYlEzVzZBOGxRdDlPY0FqYVlyb1VrRHVJdFNReXItV3F3dDZpU2Q5a2hSdV9rVHVEYXNEeDVLamNuMjNhRXd0eWtDSXZqcEVYaWhfT25lLXJzNzN3WEh6ckVJbkVYSnQ5Q0thcWFEQmpmM1dFYnFrZnpoM1NDbm1DcDBpQWR1bDBXdzJsTUlBVGJiNjRzUS1wVGNhQ0t6MXdBNWZ6TWdKSzBqMjZBT1VGTnE1T0ZZY2JTcVFyaWZUaVFWbTBaQ1lpYS1HY2stbWVqUFg4VEdPMlNueUxFZmdZQWFiX0FpazB5OWhFOUhCVGJfWVkyYXZGdk5JMGxkTFlhQnY1RjBEMmF4ZGJvdU05T2V1YVNoWGlPbk5KUkw2TXZTRldiTnBmLWtLVFFIejFzY1hMSmEyRFNGV3ZtY2xIWmhRRF9NeXkzbkpIaGI3NkpzVkgyQ19SNlljTHd0M0FaOV93Q1g5WWZ0cHVKVnhUeVdhRWdWTnZwZ084bEhmOWtTUkdZR21uLWpaWE1MWExoWTU4czVTY2JCYlUzQ2RpY3Z6ellZcV9tTnVVUVZrZHpTRjVTQkNXV2ducEtrSndhSHpIUEc0OHYtVURFVzJJbU1EN2kxR0p5bW9OdFhEWUZVeTZva0pURVFqcmFyV0RLTllYcGZoaHppeGVydTVxTjJ0MGNJczh3RHdYaUlFZzd3RVlVT281ZUsxM0w2ZEJTWEhVZl9ZOXhXaFliWjduRHRrLWlnTkZmU2YwYXJERFhVNEdaRG1kcnVhWFRxbVZDQzBfRlVHRlBseHQ3bG9RZVFXODVXZVQ0SjhBa1hRYWZ4RjBnT21JWW5zT0JNR1lWb09NaHpZVTZEcEcyYURGaGRKMzdQSnhEQkQtc2NnQmdiMEVtcEVmN0pMb3VjcDFoNk8wX2ZkUUZkWG9HY2hNblJ3UWZ4VFR1WlU2QjFjZVVEMHFHUU1NV0xQYXVybVY0UWM2X3hweUFiWGpBYWwxWGVpSDhLTTFxNmNBaUViOUlJbHU4LVk2aHNxU1JZV2V3T3R0cVNWVWZta2lzaVVTbGdlaUNIVFFtVW1EbnVYTE95TkFpV1gtcUNZY01EM0N4SUI0dWZaNmV2Ti00UjBCQlBDcHAyNzV5aFlod29Ba2dxc2N3MGhRcVgzZFVCd1NBc1RkZkVoWkRsdk0zNXk1NUtfNVJ1NUlXdnl2NU1VeTREcVVEODAwbTVpNXZKR3VycTVlYlcwUGhwR1VranZPTDlNTmp1X2dVRWIwQS1UanBzQW1WOTliS0hYeFFoTDRYRS1hLTkwNkFFYlJBczJsRVF3SmhyUXBPeUpNalFJeDRmQWl6ZXVqN0QyY2lSSE5ub1JWRkdaZ0NjdmNNTGxKcE5DWkY4TFNBS0tmMGZtTGRHMmVpUnB2SzhhM01nWVZYb1VIQzBQczJQRmpwV3NpSzl1Ml80S1VMd3BQR1RmOXMzUFdxYmdFYndnNklrQUhPenZmRkJZa25nWkZMQk1qck1lVW15NXdDb21TeGtzcV82UDJ0X1ByUXZ5T1l5NmRqOEtEVTVXcjB2aUdkMUJkV3pWRmFQT1VqVW9rUWRHNG02OE9leUxFWXZ0T0lWRlFXemxhMlcwSDAtUHZqQTA1elZVaHNwLW1kV0QwS2xWNkNUUUI0LVdDYy1SV2VhN2dVcTV2ZnVBdE5fZW9ONnhEYlJGRmtIQnlJeFcyaEdmcGcyRGlLSUpsdVVVbGpmOXBkNUFheXNwLS1XQ2U1bW5NSjByTS03a08tWFVZbk1aRVpXMC1SOV9TWE93eTIyaXZaUEtfX25BQnd1RWcxVkFvQ1VZUzktOE51eXR0SDNhM19nVmlMR25Xc0s0U2RMeU9seVA0QTQ1cVBQVk5ZOHRXRG42S0JZazNTQ3FNV0RtNlVEdTQtYm14MS0wZmFLWFZHc1hVdWU1enMzR19rUG9PRFoxYWZfWllmbVdFTGEtNjkwTTY3bVNzb05CcGJTc0FiajZiOFNYTDY4U2QxSzlaeU1DQ0FTLWVtUEtacVc0RV84LWoyWnR0RlROMXY0LTgwSkxTdmZWTU5qNFN4Qm1TWmlsMUlDbTRUUU1tdGNNaEhkajVvTFRTWFl3WmY2bS1ldGI4cXVEWnZWazZ4Q0c3dXl6X3JETnZsd3VLYVV6WmdlT0pYcTl0S2dIZmRHMDIwM2ZpcEVqU2lfTHhUZFhnSENCU1YwUFB2cGo5dXFZOTEwandfNnRXVVl5X2dwZ1FsS214ZS1LOFN1X2JQZkV5SHhUZFRMemg5UjNhZFpldEkxZnhCRUdNYkhjOTRfQmwzY3o4clRrSUZFSWlGbmh3TG9JbzBzbXR0NEJUc04xSXJ4NXpINGU5QzlxMGczMWo5YkxycUZXZGZod1JBdEpLNkxJWS16WXJRTVNzdHJyQy03YVpDS2YtWnJZSkFaR3FMekIzeXpSSno4QjF2dXd0eUpJZHlNeTcxR0dxNE5YWC1iZ1ZRSkZtUzVyb05BMzIxQm9XYVN3NlBlVklOU1FsNFFhcmUzX1MzMWFRLTh5MTBFUWdrZHJSNUJseDZaV244Mlc0MHNYTnFkQk84ZTRtTlRhbmpIang5dk95WmV2bG03VHBPN2c2ckZwUkFWNVZoS3Bibk1BeHY1dDN4OUZzY0E2NzhIOEhWRVU1MklUQ1d5RGhHeVVVeW43azY4dC1SamhQSjlOdnVEeHJIaHE3VGItbDVRMlRyMFF3akdjWUdLX2lOQ2VRQ2VaTTZUcFEwZUtzb3d6N1BUbTlNZktVa2J4X3pmUDZSbUl4N0IzSWxZcXlCTlQ5US1mQ00wS1FESk9SRTBKUjZ1NUk1RU54MkVXWEtHdzRKQ3pIemhQQlBzSzVUbjA5OVc1OTFJUHlaWmpUbTFEQTJhTmlqTzhQUWxfRk51cFRfM1NHeWtMTXJJTVpJRWVDdmpkdUxuazg5UExobXNfRTNxaEFPUEdWRE9UTDNGcG1Bd2Vjcmw4UnZtSmV3R2gzaGtrSGdfM3ZVZDRSbkVackZOQWlTeUVQSjZHSXhLckhwZjJrSGxqSzZnODVjakd2czc5UFo5WDl4OTNINlNoT2FMdzhLWjR4UXZidGNSbHVxM3VDUmlZVFNfZmRPMlAycnRvT2lrZXdQV2I4WTRoblh2eDdZOTBySXlqVFlNWHlyT1Nqd0MtUkt5NEtBY1dZQ2hOT3VmZmZtTmV3SW9NcXc0NGJSY19uR2VZc0Nydm10RC1lNVVnZFdDWklxVnVOb2JWM2RsbDZjZEdfZDBQaExfTXMtckgwWVFtc29mTG0tYl9pZDZCYVlsTXU0SXdLdzBadFp6UUdGbHdfMTJCVjNfbi1Kb0ViY24zVVp6MmRmcEhTZ2NCRHNZQ0lRU3I2cVhxV25CMXVHRElWZVhueTFsUUVZUjJSczFjYlUxSGpMenhoNzhLQWdEM2RhMjRkaWhpb2NielJTRWo0Q3VvSzhYX2daT0tmT2FjSXFrWWN6OXBsSlVyTnlzdTMyNnJPN0xlS3VNaHFrX2VNZHFHTnhaQWRfek1RNWJzOVZCbDBSUkNpNlI1clJ5elVuUFZnS0JUSWhmMzR0bGd4a3JqNXdGU2RLYTNEQzdkamZkd0psSHZpb1dRNzBybFdDR0ZkWVpjQnN3REE1WkExN01ZQWtoWGRuSFU3MFpxRXcwdnRUZWswWXNmVWVzdVpHSU9VNGxSZkYxcGx2WndPbUl0Q0dINUNZVzZiTUlXbUFWeEV4X085Vm5XTWhoQXVoYWtvYllJNVVEc1ppY2lQX1JHcWZhSWVqbjN3QmJTaDFLZjYySkRISzg4SndUTkZnMFFtdjJvWDNsWGl5aGJqWXloQ2lJNXo2dHlvSTExOVgyT0pmXzBvNmRYZ2hMemYtTjYtV3VRb29fUmhPbjVMNGRnQlozM3N1alpEbEgtM0RFQVEzSzFGcHJVSzhnYTBOckgzd00yMko1bUtkZVBwV1ptWVZKVlFUY3QyV3RxWHBNY0luYWI5WTRrNkc2MmRseEZQMmtwTVJfdms1bE5OOHRlR1RBYjB6Nnd2dWxnbncyQ183bzZQczR3MXJTNlN5Nmp4ZjlmOGNHMUx5bHc1LW4wVWcybkJZRmtsdElRZEVUMmpvUUszdzlrR19RRXZtOUNSN2syZUJPVFFpRFIzdUFQVFM5MG5lSnpHSHk0bUloVkVNaVBjLUY5YlpTbGk1WDNfVHg2OXlMMDZyTG9ieHZTTENjX2lxc0k3NXhTZ1o0cnh6cFpVdExYU2J2czJuT3RNZF9PRi16TWlxUUFGM2JKVXFYY0w5NVpOdWtrWUtwZWhyM2hwX1VfdWM0aTlfZURXcEg3eWxBQWIyclNMRjRJRHRHeUw4NmZsUHRWUnRjRGpKMjNOSVh1eGMxaWowMDFsN19JZUZnclNvWTgyRVJ5SmV0SnNTdjFJbVJrV3dxaFAybkdkWE1wMVdGSnhheWRIQXc3M0ZCWDBETTJGcTlvN2V0ODAxMVc2UUtkNkd3Ui1HWWJMOVladEVELWFzZWtGNHpIa2kzamRMUDJzNXIzT0RXZXVXU19CN0xBZjZyZDRIQWlaRVpZTzNWNjhYa0YwVXBZRlU4SkNxdS1sWG5hUEJBUG10N1Jpb2lMRlhWWkJYVjgwQTdHSFpnZnlwWml3Li05MVJVUkRNV2F1YnNLVFVYazBLcFE"}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '385c2b78-a076-425a-8687-ce37dfa97850',
  'x-ms-keyvault-service-version',
  '1.1.0.879',
  'x-ms-keyvault-network-info',
  'addr=40.71.194.238;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 04 Oct 2019 23:22:20 GMT',
  'Connection',
  'close',
  'Content-Length',
  '7767' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .delete('/secrets/CRUDSecretName-canbackupasecret-')
  .query(true)
  .reply(401, {"error":{"code":"Unauthorized","message":"Request is missing a Bearer or PoP token."}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '87',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'WWW-Authenticate',
  'Bearer authorization="https://login.windows.net/azure_tenant_id", resource="https://vault.azure.net"',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '22f52811-0ccb-4b1c-9895-599415b9c7b0',
  'x-ms-keyvault-service-version',
  '1.1.0.879',
  'x-ms-keyvault-network-info',
  'addr=40.71.194.238;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 04 Oct 2019 23:22:20 GMT',
  'Connection',
  'close' ]);


nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3600,"ext_expires_in":3600,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  '174a5b09-e3c8-43e3-a3fd-425150154900',
  'x-ms-ests-server',
  '2.1.9485.10 - EUS ProdSlices',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=AuxUAU4VwThPg7_C4r4SBk4_aSJHAwAAACvLKdUOAAAA; expires=Sun, 03-Nov-2019 23:22:21 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; HttpOnly',
  'Date',
  'Fri, 04 Oct 2019 23:22:21 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .delete('/secrets/CRUDSecretName-canbackupasecret-')
  .query(true)
  .reply(200, {"recoveryId":"https://keyvault_name.vault.azure.net/deletedsecrets/CRUDSecretName-canbackupasecret-","deletedDate":1570231341,"scheduledPurgeDate":1578007341,"id":"https://keyvault_name.vault.azure.net/secrets/CRUDSecretName-canbackupasecret-/fc9af3436f9a48868d3f5bcb81874d42","attributes":{"enabled":true,"created":1570231340,"updated":1570231340,"recoveryLevel":"Recoverable+Purgeable"}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '8e10583b-242b-4ea1-be48-4c28a80e64b7',
  'x-ms-keyvault-service-version',
  '1.1.0.879',
  'x-ms-keyvault-network-info',
  'addr=40.71.194.238;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 04 Oct 2019 23:22:21 GMT',
  'Connection',
  'close',
  'Content-Length',
  '418' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .delete('/deletedsecrets/CRUDSecretName-canbackupasecret-')
  .query(true)
  .reply(401, {"error":{"code":"Unauthorized","message":"Request is missing a Bearer or PoP token."}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '87',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'WWW-Authenticate',
  'Bearer authorization="https://login.windows.net/azure_tenant_id", resource="https://vault.azure.net"',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  'd4cc0656-e036-4c25-9999-021e4aa12b55',
  'x-ms-keyvault-service-version',
  '1.1.0.879',
  'x-ms-keyvault-network-info',
  'addr=40.71.194.238;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 04 Oct 2019 23:22:21 GMT',
  'Connection',
  'close' ]);


nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3599,"ext_expires_in":3599,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  '00c3f66c-fa63-4757-a7f4-74ae64db1e00',
  'x-ms-ests-server',
  '2.1.9485.10 - SCUS ProdSlices',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=AuxUAU4VwThPg7_C4r4SBk4_aSJHBAAAACvLKdUOAAAA; expires=Sun, 03-Nov-2019 23:22:22 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; HttpOnly',
  'Date',
  'Fri, 04 Oct 2019 23:22:21 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .delete('/deletedsecrets/CRUDSecretName-canbackupasecret-')
  .query(true)
  .reply(409, {"error":{"code":"Conflict","message":"Secret is currently being deleted.","innererror":{"code":"ObjectIsBeingDeleted"}}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '121',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  'b8c2c415-b30b-4573-b109-754f5eed45a1',
  'x-ms-keyvault-service-version',
  '1.1.0.879',
  'x-ms-keyvault-network-info',
  'addr=40.71.194.238;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 04 Oct 2019 23:22:22 GMT',
  'Connection',
  'close' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .delete('/deletedsecrets/CRUDSecretName-canbackupasecret-')
  .query(true)
  .reply(401, {"error":{"code":"Unauthorized","message":"Request is missing a Bearer or PoP token."}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '87',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'WWW-Authenticate',
  'Bearer authorization="https://login.windows.net/azure_tenant_id", resource="https://vault.azure.net"',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  'cd7311ba-bfdf-4d07-84b5-1b8c9a7f5f37',
  'x-ms-keyvault-service-version',
  '1.1.0.879',
  'x-ms-keyvault-network-info',
  'addr=40.71.194.238;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 04 Oct 2019 23:22:32 GMT',
  'Connection',
  'close' ]);


nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3600,"ext_expires_in":3600,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  '43b20e24-f1fc-4896-9dc7-7fc0f47b4900',
  'x-ms-ests-server',
  '2.1.9485.10 - NCUS ProdSlices',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=AuxUAU4VwThPg7_C4r4SBk4_aSJHBQAAACvLKdUOAAAA; expires=Sun, 03-Nov-2019 23:22:33 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; HttpOnly',
  'Date',
  'Fri, 04 Oct 2019 23:22:32 GMT',
  'Connection',
  'close',
  'Content-Length',
  '1231' ]);


nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .delete('/deletedsecrets/CRUDSecretName-canbackupasecret-')
  .query(true)
  .reply(204, "", [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '0e24d7bd-e3bf-48b5-9701-b258495faa9a',
  'x-ms-keyvault-service-version',
  '1.1.0.879',
  'x-ms-keyvault-network-info',
  'addr=40.71.194.238;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 04 Oct 2019 23:22:33 GMT',
  'Connection',
  'close' ]);

