"use strict";(self.webpackChunkdevwks_2845_client=self.webpackChunkdevwks_2845_client||[]).push([[214],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return t?o.createElement(h,i(i({ref:n},c),{},{components:t})):o.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d[p]="string"==typeof e?e:r,i[1]=d;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5392:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var o=t(7462),r=(t(7294),t(3905));const a={sidebar_position:4},i="Function Code Part 1",d={unversionedId:"lambda-docs/function-coding-p-1",id:"lambda-docs/function-coding-p-1",title:"Function Code Part 1",description:"With the explanation of the lambda_handler code done, we can now start adding code to the handler to respond to Meraki events.",source:"@site/docs/lambda-docs/04-function-coding-p-1.mdx",sourceDirName:"lambda-docs",slug:"/lambda-docs/function-coding-p-1",permalink:"/DEVWKS-2845/lambda-docs/function-coding-p-1",draft:!1,editUrl:"https://cisco.com/docs/lambda-docs/04-function-coding-p-1.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Functions Explanation",permalink:"/DEVWKS-2845/lambda-docs/function-explanation"},next:{title:"Function Code Part 2",permalink:"/DEVWKS-2845/lambda-docs/function-coding-p-2"}},l={},s=[],c={toc:s},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"function-code-part-1"},"Function Code Part 1"),(0,r.kt)("p",null,"With the explanation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"lambda_handler")," code done, we can now start adding code to the handler to respond to Meraki events."),(0,r.kt)("p",null,"For our example, we want to receive a ",(0,r.kt)("inlineCode",{parentName:"p"},"port disconnected")," alert and then call out to the Meraki Dashboard to shutdown the port. We need to determine what data we need from the port disconnected alert in order to initiate a shutdown of the same port. In the below JSON the highlighted lines will show what data we need:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  "version": "0.1",\n  "sharedSecret": "",\n  "sentAt": "2023-01-13T19:57:07.307562Z",\n  "organizationId": "000000",\n  "organizationName": "EX net",\n  "organizationUrl": "https://n471.meraki.com/o/000000/manage/organization/overview",\n  "networkId": "N_00000000",\n  "networkName": "Ex net",\n  "networkUrl": "https://n471.meraki.com/ex_net/n/000000/manage/nodes/wired_status",\n  "networkTags": [],\n  //highlight-next-line\n  "deviceSerial": "Q00Y-U00R-T00G",\n  "deviceMac": "00:00:00:d7:14:83",\n  "deviceName": "Home MX",\n  "deviceUrl": "https://n471.meraki.com/ex_net/n/000000/manage/nodes/new_wired_status",\n  "deviceTags": [],\n  "deviceModel": "MX67W",\n  "alertId": "",\n  "alertType": "Switch port disconnected",\n  //highlight-next-line\n  "alertTypeId": "port_disconnected",\n  "alertLevel": "warning",\n  "occurredAt": "2023-01-13T19:57:07.259607Z",\n  "alertData": {\n    //highlight-next-line\n    "portNum": 3,\n    "description": "Switch port is down",\n    // highlight-next-line\n    "status": "down",\n    "prevStatus": "100 Gbps",\n    "portDesc": "Corp Access"\n  }\n}\n')),(0,r.kt)("p",null,"Looking through the above JSON, we know we need the serial number, port number, alert type ID, and the status of the port."),(0,r.kt)("p",null,"We want to check the alert type, if the metatdata exists, and the status of the port before we continue running the function. Otherwise the function should exit as quickly as possible.\nIf all the checks pass, we will import the python ",(0,r.kt)("inlineCode",{parentName:"p"},"requests")," library to make the API call to Meraki later."),(0,r.kt)("p",null,"We will add the green highlighted lines to the ",(0,r.kt)("inlineCode",{parentName:"p"},"lambda_handler")," and remove the red ones."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Green highlighted lines in the code are lines that we are adding to our code.",(0,r.kt)("br",{parentName:"p"}),"\n","Red highlighted lines are the lines we are removing from the code.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='lambda_function.py' showLineNumbers",title:"'lambda_function.py'",showLineNumbers:!0},"import json\n\ndef lambda_handler(event, context):\n  #remove-line\n    # TODO implement\n    #add-line\n  if event['alertTypeId'] != 'port_disconnected':\n#add-line\n    return {\n      #add-line\n      'statusCode': 200,\n      #add-line\n      'body': json.dumps('Not a downed port')\n      #add-line\n    }\n    #add-line\n  if 'alertData' not in event:\n    #add-line\n    return {\n      #add-line\n      'statusCode': 200,\n      #add-line\n      'body': json.dumps('Not a downed port')\n      #add-line\n    }\n    #add-line\n  if event['alertData']['status'] == 'down':\n      #add-line\n      import requests\n    #add-line\n  else:\n      #add-line\n    return {\n          #add-line\n      'statusCode': 200,\n          #add-line\n      'body': json.dumps('Not a downed port')\n          #add-line\n      }\n  #remove-line\n  return {\n        #remove-line\n    'statusCode': 200,\n        #remove-line\n    'body': json.dumps('Hello from Lambda!')\n        #remove-line\n    }\n")),(0,r.kt)("p",null,"Now that we know the port will be down and the ",(0,r.kt)("inlineCode",{parentName:"p"},"requests")," library is imported, we now need to store the information we need to make the API call. Add the green highlighted lines to the file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"title=lambda_function.py showLineNumbers",title:"lambda_function.py",showLineNumbers:!0},"import json\n\ndef lambda_handler(event, context):\n  if event['alertTypeId'] != 'port_disconnected':\n    return {\n      'statusCode': 200,\n      'body': json.dumps('Not a downed port')\n    }\n  if 'alertData' not in event:\n    return {\n      'statusCode': 200,\n      'body': json.dumps('Not a downed port')\n    }\n  if event['alertData']['status'] == 'down':\n    import requests\n    #add-line\n    deviceSerial = str(event['deviceSerial'])\n    #add-line\n    deviceMac = event['deviceMac']\n    #add-line\n    deviceName = event['deviceName']\n    #add-line\n    portNumber = str(event['alertData']['portNum'])\n  else:\n    return {\n        'statusCode': 200,\n        'body': json.dumps('Not a downed port')\n      }\n")))}u.isMDXComponent=!0}}]);