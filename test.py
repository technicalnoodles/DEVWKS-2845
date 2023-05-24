key='ea5aff72f348e7c8d436dd4bcf03d64a73e2721c'
org='3694077594350649351'
network='N_3694077594350649903'

curl https://api.meraki.com/api/v1/networks/N_3694077594350649903/webhooks/payloadTemplates --header "Content-Type: application/json" --header "Accept: application/json" --header "X-Cisco-Meraki-API-Key: ea5aff72f348e7c8d436dd4bcf03d64a73e2721c" --data '{
    "name": "Meraki-test-v001",
    "body": "{\"version\": \"0.1\",\"sharedSecret\": \"{{sharedSecret}}\",\"sentAt\": \"{{sentAt}}\",\"organizationId\": \"{{organizationId}}\",\"organizationName\": \"{{organizationName}}\",\"organizationUrl\": \"{{organizationUrl}}\",\"networkId\": \"{{networkId}}\",\"networkName\": \"{{networkName}}\",\"networkUrl\": \"{{networkUrl}}\",\"networkTags\": {{ networkTags | jsonify }},\"deviceSerial\": \"{{deviceSerial}}\",\"deviceMac\": \"{{deviceMac}}\",\"deviceName\": \"{{deviceName}}\",\"deviceUrl\": \"{{deviceUrl}}\",\"deviceTags\": {{ deviceTags | jsonify }},\"deviceModel\": \"{{deviceModel}}\",\"alertId\": \"{{alertId}}\",\"alertType\": \"{{alertType}}\",\"alertTypeId\": \"{{alertTypeId}}\",\"alertLevel\": \"{{alertLevel}}\",\"occurredAt\": \"{{occurredAt}}\",\"alertData\": {    \"portNum\": 2,    \"description\": \"Switch port is down\",    \"status\": \"up\",    \"prevStatus\": \"100 Gbps\",    \"portDesc\": \"Corp Access\"  }}"
}'

{
    "name": "rymaclen",
    "body": "{\"version\": \"0.1\",\"sentAt\": \"{{sentAt}}\",\"organizationId\": \"{{organizationId}}\",\"organizationName\": \"{{organizationName}}\",\"organizationUrl\": \"{{organizationUrl}}\",\"networkId\": \"{{networkId}}\",\"networkName\": \"{{networkName}}\",\"networkUrl\": \"{{networkUrl}}\",\"networkTags\": {{ networkTags | jsonify }},\"deviceSerial\": \"Q2EW-CTL2-MQRL\",\"deviceMac\": \"{{deviceMac}}\",\"deviceName\": \"{{deviceName}}\",\"deviceUrl\": \"{{deviceUrl}}\",\"deviceTags\": {{ deviceTags | jsonify }},\"deviceModel\": \"{{deviceModel}}\",\"alertId\": \"{{alertId}}\",\"alertType\": \"{{alertType}}\",\"alertTypeId\": \"{{alertTypeId}}\",\"alertLevel\": \"{{alertLevel}}\",\"occurredAt\": \"{{occurredAt}}\",\"alertData\": {    \"portNum\": 3,    \"description\": \"Switch port is down\",    \"status\": \"down\",    \"prevStatus\": \"100 Gbps\",    \"portDesc\": \"Corp Access\"  }}"
}

