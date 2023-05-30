"use strict";(self.webpackChunkdevwks_2845_client=self.webpackChunkdevwks_2845_client||[]).push([[722],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),k=o,u=d["".concat(s,".").concat(k)]||d[k]||m[k]||r;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:2},i="Using the Meraki API & Webhooks",l={unversionedId:"meraki-docs/meraki-api",id:"meraki-docs/meraki-api",title:"Using the Meraki API & Webhooks",description:"We first need to create a webhook template and then use the Meraki API to push the webhook template to the Dashboard.",source:"@site/docs/meraki-docs/02-meraki-api.mdx",sourceDirName:"meraki-docs",slug:"/meraki-docs/meraki-api",permalink:"/DEVWKS-2845/meraki-docs/meraki-api",draft:!1,editUrl:"https://cisco.com/docs/meraki-docs/02-meraki-api.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create & Save Meraki API key, ORG ID, and Network",permalink:"/DEVWKS-2845/meraki-docs/meraki"},next:{title:"Lambda Function",permalink:"/DEVWKS-2845/category/lambda-function"}},s={},p=[{value:"Create Webhook Template",id:"create-webhook-template",level:2},{value:"Download Code to be run locally",id:"download-code-to-be-run-locally",level:2},{value:"Editting the code",id:"editting-the-code",level:3},{value:"Open Terminal and Installing Requests",id:"open-terminal-and-installing-requests",level:3},{value:"Running the code!",id:"running-the-code",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-the-meraki-api--webhooks"},"Using the Meraki API & Webhooks"),(0,o.kt)("p",null,"We first need to create a webhook template and then use the Meraki API to push the webhook template to the Dashboard."),(0,o.kt)("h2",{id:"create-webhook-template"},"Create Webhook Template"),(0,o.kt)("p",null,"This ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"may"))," be done using the ",(0,o.kt)("a",{parentName:"p",href:"https://webhook-builder-vpfmunhy6a-uc.a.run.app/"},"webhook builder")," for future projects, but, for the purposes of this session, we are going to edit an already created template."),(0,o.kt)("h2",{id:"download-code-to-be-run-locally"},"Download Code to be run locally"),(0,o.kt)("p",null,"We are going to use some existing code to create our Custom Webhook Template:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='UploadCustomWebhookTemplate.py showLineNumbers'",title:"'UploadCustomWebhookTemplate.py","showLineNumbers'":!0},'# this script, for a given\n# - API key\n# - NetworkID\n# - Webhook Template Name\n# creates a new custom webhook template\n# API information available here: https://developer.cisco.com/meraki/webhooks/#!custom-payload-templates-overview\n# precreated templates available here: https://github.com/meraki/webhook-payload-templates\n# further training available here: https://developer.cisco.com/learning/labs/meraki-webhook-template-editor-intro/create-your-custom-webhook-template/\n# postman collection: https://www.postman.com/meraki-api/workspace/cisco-meraki-s-public-workspace/collection/897512-c65299ed-39a5-4b02-bb4e-933c738bfcdf?action=share&creator=897512&ctx=documentation\n\nimport sys, requests, json, getopt\n\n\ndef main(argv):\n    ARG_APIKEY = \'\'\n    ARG_NAME = \'\'\n    ARG_NETWORKID = \'\'\n\n    try:\n        opts, args = getopt.getopt(argv, \'hk:n:i:\')\n    except getopt.GetoptError:\n        printhelp()\n        sys.exit(2)\n\n    for opt, arg in opts:\n        if opt == \'-h\':\n            printhelp()\n            sys.exit()\n        elif opt == \'-k\':\n            ARG_APIKEY = arg\n        elif opt == \'-n\':\n            ARG_NETWORKID = arg\n        elif opt == \'-i\':\n            ARG_NAME = arg\n\n        # check that all mandatory arguments have been given\n    if ARG_APIKEY == \'\' or ARG_NETWORKID == \'\' or ARG_NAME == \'\':\n        printhelp()\n        sys.exit(2)\n\n    webhookTemplatePayload = "{\\n\\"version\\": \\"0.1\\",\\n\\"sharedSecret\\": \\"{{sharedSecret}}\\",\\n\\"sentAt\\": \\"{{sentAt}}\\",\\n\\"organizationId\\": \\"{{organizationId}}\\",\\n\\"organizationName\\": \\"{{organizationName}}\\",\\n\\"organizationUrl\\": \\"{{organizationUrl}}\\",\\n\\"networkId\\": \\"{{networkId}}\\",\\n\\"networkName\\": \\"{{networkName}}\\",\\n\\"networkUrl\\": \\"{{networkUrl}}\\",\\n\\"networkTags\\": {{ networkTags | jsonify }},\\n\\"deviceSerial\\": \\"{{deviceSerial}}\\",\\n\\"deviceMac\\": \\"{{deviceMac}}\\",\\n\\"deviceName\\": \\"{{deviceName}}\\",\\n\\"deviceUrl\\": \\"{{deviceUrl}}\\",\\n\\"deviceTags\\": {{ deviceTags | jsonify }},\\n\\"deviceModel\\": \\"{{deviceModel}}\\",\\n\\"alertId\\": \\"{{alertId}}\\",\\n\\"alertType\\": \\"{{alertType}}\\",\\n\\"alertTypeId\\": \\"{{alertTypeId}}\\",\\n\\"alertLevel\\": \\"{{alertLevel}}\\",\\n\\"occurredAt\\": \\"{{occurredAt}}\\",\\n\\"alertData\\": {{ alertData | jsonify }}\\n}\\n"\n\n    url = "https://api.meraki.com/api/v1/networks/" + ARG_NETWORKID + "/webhooks/payloadTemplates"\n\n    payload = json.dumps({\n        "name": ARG_NAME,\n        "body": webhookTemplatePayload\n    })\n\n    headers = {\n        "Content-Type": "application/json",\n        "Accept": "application/json",\n        "X-Cisco-Meraki-API-Key": ARG_APIKEY\n    }\n\n    response = requests.request("POST", url, headers=headers, data=payload)\n\n    print(response.status_code)\n    print(response.text)\n\n\ndef printhelp():\n    print("this script, for a given")\n    print("-k API key")\n    print("-n NetworkID")\n    print("-i Webhook Template Name")\n    print("creates a new custom webhook template")\n    print("The only editing it needs is the webhook template payload")\n    print("")\n    print("API information available here: https://developer.cisco.com/meraki/webhooks/#!custom-payload-templates-overview")\n    print("precreated templates available here: https://github.com/meraki/webhook-payload-templates")\n    print("further training available here: https://developer.cisco.com/learning/labs/meraki-webhook-template-editor-intro/create-your-custom-webhook-template/")\n    print("postman collection: https://www.postman.com/meraki-api/workspace/cisco-meraki-s-public-workspace/collection/897512-c65299ed-39a5-4b02-bb4e-933c738bfcdf?action=share&creator=897512&ctx=documentation")\n\n\nif __name__ == \'__main__\':\n    main(sys.argv[1:])\n')),(0,o.kt)("p",null,"Copy the above code into a text editor and save as ",(0,o.kt)("strong",{parentName:"p"},"UploadCustomWebhookTemplate.py")," to your Desktop"),(0,o.kt)("h3",{id:"editting-the-code"},"Editting the code"),(0,o.kt)("p",null,"Now, in order to achieve our objective later of disabling a port, we are going to make a small change to the line:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'webhookTemplatePayload = "{\\n\\"version\\": \\"0.1\\",\\n\\"sharedSecret\\": \\"{{sharedSecret}}\\",\\n\\"sentAt\\": \\"{{sentAt}}\\",\\n\\"organizationId\\": \\"{{organizationId}}\\",\\n\\"organizationName\\": \\"{{organizationName}}\\",\\n\\"organizationUrl\\": \\"{{organizationUrl}}\\",\\n\\"networkId\\": \\"{{networkId}}\\",\\n\\"networkName\\": \\"{{networkName}}\\",\\n\\"networkUrl\\": \\"{{networkUrl}}\\",\\n\\"networkTags\\": {{ networkTags | jsonify }},\\n\\"deviceSerial\\": \\"{{deviceSerial}}\\",\\n\\"deviceMac\\": \\"{{deviceMac}}\\",\\n\\"deviceName\\": \\"{{deviceName}}\\",\\n\\"deviceUrl\\": \\"{{deviceUrl}}\\",\\n\\"deviceTags\\": {{ deviceTags | jsonify }},\\n\\"deviceModel\\": \\"{{deviceModel}}\\",\\n\\"alertId\\": \\"{{alertId}}\\",\\n\\"alertType\\": \\"{{alertType}}\\",\\n\\"alertTypeId\\": \\"{{alertTypeId}}\\",\\n\\"alertLevel\\": \\"{{alertLevel}}\\",\\n\\"occurredAt\\": \\"{{occurredAt}}\\",\\n\\"alertData\\": {{ alertData | jsonify }}\\n}\\n"')),(0,o.kt)("p",null,"Where we have ",(0,o.kt)("inlineCode",{parentName:"p"},'\\n\\"deviceSerial\\": \\"{{deviceSerial}}\\"')," we are going to replace ",(0,o.kt)("inlineCode",{parentName:"p"},'\\"{{deviceSerial}}\\"'),' with \\"Q2EW-CTL2-MQRL\\"'),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It's imperative that, within the quotes, that you have just the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"serial number"))," as above, with no curly brackets, so"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},'\\n\\"deviceSerial\\": \\"Q2EW-CTL2-MQRL\\"'))),(0,o.kt)("h3",{id:"open-terminal-and-installing-requests"},"Open Terminal and Installing Requests"),(0,o.kt)("p",null,"Open the ",(0,o.kt)("strong",{parentName:"p"},"Terminal")," application, and change directory to where you saved ",(0,o.kt)("strong",{parentName:"p"},"UploadCustomWebhookTemplate.py")," as above"),(0,o.kt)("p",null,"We will next need to install the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Requests"))," package. This is essential for making API calls:"),(0,o.kt)("p",null,"Type:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pip3 install requests")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"requests"))," package should install as shown:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Installing requests package",src:n(1797).Z,width:"981",height:"362"})),(0,o.kt)("h3",{id:"running-the-code"},"Running the code!"),(0,o.kt)("p",null,"For this, you'll need:"),(0,o.kt)("p",null,"Your API Key\nYour Network ID"),(0,o.kt)("p",null,"And"),(0,o.kt)("p",null,"A name you wish to give the webhook. ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"TraineeXXCWH"))," where ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"XX"))," is your trainee number may be a good suggestion"),(0,o.kt)("p",null,"We need to type in the following to run the code:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'python3 UploadCustomWebhookTemplate.py -k ***YOURAPIKEY*** -n ***YOURNETWORKID*** -i "TraineeXXCWH"')),(0,o.kt)("p",null,"Press ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Enter"))," when ready..."),(0,o.kt)("p",null,"The API call should run, and, if successful, should show:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"API Call results",src:n(8462).Z,width:"1267",height:"169"})),(0,o.kt)("p",null,"We can also check by going to, in the Meraki Dashboard:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Systems Manager > Alerts > Webhooks")),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Add an HTTPS receiver")),(0,o.kt)("p",null,"Under ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Payload Template"))," click the drop down box, and you should see:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Custom Webhook template Installed",src:n(59).Z,width:"1570",height:"514"})),(0,o.kt)("p",null,"This means our webhook has been added to the Meraki Dashboard. We can go ahead and start creating the Lambda Function."))}m.isMDXComponent=!0},1797:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/03-installingRequests-084a7974ef39debabee0049d9a67a1cd.png"},8462:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/04-SuccessfulAPICall-c064d0aca4cfa00296db0a5c8e0b72f2.png"},59:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/05-CustomWHTInstalled-2d4136c415832a3cf3dbe0627a94fb5b.png"}}]);