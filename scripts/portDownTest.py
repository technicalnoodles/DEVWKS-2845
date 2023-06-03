import requests

portDownData = {
  "version": "0.1",
  "sharedSecret": "",
  "sentAt": "2023-01-13T19:57:07.307562Z",
  "organizationId": "000000",
  "organizationName": "EX net",
  "organizationUrl": "https://n471.meraki.com/o/000000/manage/organization/overview",
  "networkId": "N_00000000",
  "networkName": "Ex net",
  "networkUrl": "https://n471.meraki.com/ex_net/n/000000/manage/nodes/wired_status",
  "networkTags": [],
  "deviceSerial": "Q2EW-CTL2-MQRL",
  "deviceMac": "00:00:00:d7:14:83",
  "deviceName": "Home MX",
  "deviceUrl": "https://n471.meraki.com/ex_net/n/000000/manage/nodes/new_wired_status",
  "deviceTags": [],
  "deviceModel": "MX67W",
  "alertId": "",
  "alertType": "Switch port disconnected",
  "alertTypeId": "port_disconnected",
  "alertLevel": "warning",
  "occurredAt": "2023-01-13T19:57:07.259607Z",
  "alertData": {
    "portNum": 0,
    "description": "Switch port is down",
    "status": "down",
    "prevStatus": "100 Gbps",
    "portDesc": "Corp Access"
  }
}

lambdaUrl = input('Paste your lambda function URl here:')
portNum = input('Enter the number of the port you are testing:')

portDownData['alertData'][portNum] = portNum

req = requests.post(lambdaUrl, data=portDownData)
print(req.status_code)