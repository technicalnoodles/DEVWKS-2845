"use strict";(self.webpackChunkdevwks_2845_client=self.webpackChunkdevwks_2845_client||[]).push([[722],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,u=d["".concat(p,".").concat(h)]||d[h]||m[h]||r;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:2},i="Using the Meraki API & Webhooks",l={unversionedId:"meraki-docs/meraki-api",id:"meraki-docs/meraki-api",title:"Using the Meraki API & Webhooks",description:"We first need to create a webhook template and then use the Meraki API to push the webhook template to the Dashboard.",source:"@site/docs/meraki-docs/02-meraki-api.mdx",sourceDirName:"meraki-docs",slug:"/meraki-docs/meraki-api",permalink:"/DEVWKS-2845/meraki-docs/meraki-api",draft:!1,editUrl:"https://cisco.com/docs/meraki-docs/02-meraki-api.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"meraki",permalink:"/DEVWKS-2845/meraki-docs/meraki"},next:{title:"Lambda Function",permalink:"/DEVWKS-2845/category/lambda-function"}},p={},s=[{value:"Create Webhook Template",id:"create-webhook-template",level:2},{value:"Download Code to be run locally",id:"download-code-to-be-run-locally",level:2},{value:"Installing the Requests Library",id:"installing-the-requests-library",level:3},{value:"Running the code!",id:"running-the-code",level:3}],c={toc:s},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-the-meraki-api--webhooks"},"Using the Meraki API & Webhooks"),(0,o.kt)("p",null,"We first need to create a webhook template and then use the Meraki API to push the webhook template to the Dashboard."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"When using the workstation, you should already have a code editor (VSCode) open with a terminal at the bottom. You can create all files, edit code, and run commands using this editor.")),(0,o.kt)("h2",{id:"create-webhook-template"},"Create Webhook Template"),(0,o.kt)("p",null,"This ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"may"))," be done using the ",(0,o.kt)("a",{parentName:"p",href:"https://webhook-builder-vpfmunhy6a-uc.a.run.app/"},"webhook builder")," for future projects, but, for the purposes of this session, we are going to edit an already created template."),(0,o.kt)("h2",{id:"download-code-to-be-run-locally"},"Download Code to be run locally"),(0,o.kt)("p",null,"We are using the below code to create our Custom Webhook Template. Copy the code below using the copy button on the top right of the code block."),(0,o.kt)("p",null,"Create a new file in the Code Editor called ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"template.py"))," and paste the code you copied into it."),(0,o.kt)("p",null,"Then save the file using ",(0,o.kt)("inlineCode",{parentName:"p"},"CTRL+S")," or by going to ",(0,o.kt)("inlineCode",{parentName:"p"},"File -> Save")," on the top left of the code editor window."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='template.py' showLineNumbers",title:"'template.py'",showLineNumbers:!0},'# this script, for a given\n# - API key\n# - NetworkID\n# - Webhook Template Name\n# creates a new custom webhook template\n# API information available here: https://developer.cisco.com/meraki/webhooks/#!custom-payload-templates-overview\n# precreated templates available here: https://github.com/meraki/webhook-payload-templates\n# further training available here: https://developer.cisco.com/learning/labs/meraki-webhook-template-editor-intro/create-your-custom-webhook-template/\n# postman collection: https://www.postman.com/meraki-api/workspace/cisco-meraki-s-public-workspace/collection/897512-c65299ed-39a5-4b02-bb4e-933c738bfcdf?action=share&creator=897512&ctx=documentation\n\nimport sys, requests, json, getopt\n\n\ndef main(argv):\n    ARG_APIKEY = \'\'\n    ARG_NAME = \'\'\n    ARG_NETWORKID = \'\'\n\n    try:\n        opts, args = getopt.getopt(argv, \'hk:n:i:\')\n    except getopt.GetoptError:\n        printhelp()\n        sys.exit(2)\n\n    for opt, arg in opts:\n        if opt == \'-h\':\n            printhelp()\n            sys.exit()\n        elif opt == \'-k\':\n            ARG_APIKEY = arg\n        elif opt == \'-n\':\n            ARG_NETWORKID = arg\n        elif opt == \'-i\':\n            ARG_NAME = arg\n\n        # check that all mandatory arguments have been given\n    if ARG_APIKEY == \'\' or ARG_NETWORKID == \'\' or ARG_NAME == \'\':\n        printhelp()\n        sys.exit(2)\n\n    webhookTemplatePayload = "{\\n\\"version\\": \\"0.1\\", \\\n                                \\n\\"sharedSecret\\": \\"{{sharedSecret}}\\", \\\n                                \\n\\"sentAt\\": \\"{{sentAt}}\\", \\\n                                \\n\\"organizationId\\": \\"{{organizationId}}\\", \\\n                                \\n\\"organizationName\\": \\"{{organizationName}}\\", \\\n                                \\n\\"organizationUrl\\": \\"{{organizationUrl}}\\", \\\n                                \\n\\"networkId\\": \\"{{networkId}}\\", \\\n                                \\n\\"networkName\\": \\"{{networkName}}\\", \\\n                                \\n\\"networkUrl\\": \\"{{networkUrl}}\\", \\\n                                \\n\\"networkTags\\": {{ networkTags | jsonify }}, \\\n                                \\n\\"deviceSerial\\": \\"{{deviceSerial}}\\", \\\n                                \\n\\"deviceMac\\": \\"{{deviceMac}}\\", \\\n                                \\n\\"deviceName\\": \\"{{deviceName}}\\", \\\n                                \\n\\"deviceUrl\\": \\"{{deviceUrl}}\\", \\\n                                \\n\\"deviceTags\\": {{ deviceTags | jsonify }}, \\\n                                \\n\\"deviceModel\\": \\"{{deviceModel}}\\", \\\n                                \\n\\"alertId\\": \\"{{alertId}}\\", \\\n                                \\n\\"alertType\\": \\"Switch port disconnected\\", \\\n                                \\n\\"alertTypeId\\": \\"port_disconnected\\", \\\n                                \\n\\"alertLevel\\": \\"{{alertLevel}}\\", \\\n                                \\n\\"occurredAt\\": \\"{{occurredAt}}\\", \\\n                                \\n\\"alertData\\": {\\"portNum\\": 1 , \\\n                                                \\"description\\": \\"Switch port is down\\", \\\n                                                \\"status\\": \\"down\\", \\"prevStatus\\": \\\n                                                \\"100 Gbps\\",\\"portDesc\\": \\"Corp Access\\" \\\n                                }\\n}\\n"\n\n    url = "https://api.meraki.com/api/v1/networks/" + ARG_NETWORKID + "/webhooks/payloadTemplates"\n\n    payload = json.dumps({\n        "name": ARG_NAME,\n        "body": webhookTemplatePayload\n    })\n\n    headers = {\n        "Content-Type": "application/json",\n        "Accept": "application/json",\n        "X-Cisco-Meraki-API-Key": ARG_APIKEY\n    }\n\n    response = requests.request("POST", url, headers=headers, data=payload)\n\n    print(response.status_code)\n    print(response.text)\n\n\ndef printhelp():\n    print("this script, for a given")\n    print("-k API key")\n    print("-n NetworkID")\n    print("-i Webhook Template Name")\n    print("creates a new custom webhook template")\n    print("The only editing it needs is the webhook template payload")\n    print("")\n    print("API information available here: https://developer.cisco.com/meraki/webhooks/#!custom-payload-templates-overview")\n    print("precreated templates available here: https://github.com/meraki/webhook-payload-templates")\n    print("further training available here: https://developer.cisco.com/learning/labs/meraki-webhook-template-editor-intro/create-your-custom-webhook-template/")\n    print("postman collection: https://www.postman.com/meraki-api/workspace/cisco-meraki-s-public-workspace/collection/897512-c65299ed-39a5-4b02-bb4e-933c738bfcdf?action=share&creator=897512&ctx=documentation")\n\n\nif __name__ == \'__main__\':\n    main(sys.argv[1:])\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Changes")),(0,o.kt)("p",null,"Where we have ",(0,o.kt)("inlineCode",{parentName:"p"},'\\n\\"deviceSerial\\": \\"{{deviceSerial}}\\"')," we are going to replace ",(0,o.kt)("inlineCode",{parentName:"p"},'\\"{{deviceSerial}}\\"'),' with \\"Q2EW-CTL2-MQRL\\"'),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It's imperative that, within the quotes, you have just the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"serial number"))," as above, with no curly brackets, so it will look like the below:"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},'\\n\\"deviceSerial\\": \\"Q2EW-CTL2-MQRL\\"'))),(0,o.kt)("p",null,"Secondly, where we have the line ",(0,o.kt)("inlineCode",{parentName:"p"},'\\n\\"alertData\\": {\\"portNum\\": 1 , \\ ')," change the number 1 to your attendee ID."),(0,o.kt)("p",null,"Save the file again."),(0,o.kt)("h3",{id:"installing-the-requests-library"},"Installing the Requests Library"),(0,o.kt)("p",null,"Open the ",(0,o.kt)("strong",{parentName:"p"},"Terminal")," application, if it is not already open in the code editor, and change the directory to where you saved ",(0,o.kt)("strong",{parentName:"p"},"template.py")," if the terminal is not already there."),(0,o.kt)("p",null,"We need to install the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Requests"))," package. This is essential for making API calls:"),(0,o.kt)("p",null,"Type:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pip3 install requests")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"requests"))," package should install as shown:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Installing requests package",src:n(1797).Z,width:"981",height:"362"})),(0,o.kt)("h3",{id:"running-the-code"},"Running the code!"),(0,o.kt)("p",null,"For this, you'll need your:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"API Key"),(0,o.kt)("li",{parentName:"ul"},"Network ID")),(0,o.kt)("p",null,"And"),(0,o.kt)("p",null,"A meaningful name for the webhook. A suggestion is to use ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"TraineeXX"))," where ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"XX"))," is your trainee number."),(0,o.kt)("p",null,"The below is how to run the command and you will need to replace each starred word (and the stars) with the subsequent data you got earlier:"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If you run into an SSL error for urllib3 when running the script, please do the the below to fix it:"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"pip3 uninstall urllib3")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"pip3 install urllib3==1.26.6"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'python3 template.py -k ***YOURAPIKEY*** -n ***YOURNETWORKID*** -i "TraineeXX"')),(0,o.kt)("p",null,"Press ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Enter"))," when ready..."),(0,o.kt)("p",null,"The API call should run, and, if successful, should show:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"API Call results",src:n(8462).Z,width:"1267",height:"169"})),(0,o.kt)("p",null,"We can also check by going to ",(0,o.kt)("inlineCode",{parentName:"p"},"Systems Manager > Alerts > Webhooks")," in the Meraki Dashboard."),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Add an HTTPS receiver")),(0,o.kt)("p",null,"Under ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Payload Template"))," click the drop down box, and under ",(0,o.kt)("em",{parentName:"p"},"Custom templates")," you should see something the webhook template you just created. Similar to what is in the image below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Custom Webhook template Installed",src:n(59).Z,width:"1570",height:"514"})),(0,o.kt)("p",null,"This means our webhook has been added to the Meraki Dashboard. We can go ahead and start creating the Lambda Function."))}m.isMDXComponent=!0},1797:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/03-installingRequests-084a7974ef39debabee0049d9a67a1cd.png"},8462:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/04-SuccessfulAPICall-c064d0aca4cfa00296db0a5c8e0b72f2.png"},59:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/05-CustomWHTInstalled-2d4136c415832a3cf3dbe0627a94fb5b.png"}}]);