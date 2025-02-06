"use strict";(self.webpackChunkdevwks_2845_client=self.webpackChunkdevwks_2845_client||[]).push([[731],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},l="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=c(a),h=r,u=l["".concat(d,".").concat(h)]||l[h]||g[h]||o;return a?n.createElement(u,i(i({ref:t},s),{},{components:a})):n.createElement(u,i({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[l]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4576:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:4},i="Legacy API Gateway",p={unversionedId:"appendix/create-api-gateway",id:"appendix/create-api-gateway",title:"Legacy API Gateway",description:"Create the API Gateway",source:"@site/docs/appendix/03-create-api-gateway.md",sourceDirName:"appendix",slug:"/appendix/create-api-gateway",permalink:"/DEVWKS-2845/appendix/create-api-gateway",draft:!1,editUrl:"https://cisco.com/docs/appendix/03-create-api-gateway.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Upload the Lambda Function",permalink:"/DEVWKS-2845/appendix/lambda-docs/package-function"},next:{title:"Testing The Deployment",permalink:"/DEVWKS-2845/appendix/testing"}},d={},c=[{value:"Create the API Gateway",id:"create-the-api-gateway",level:2},{value:"Add a Trigger",id:"add-a-trigger",level:3},{value:"Update Meraki Dashboard Webhooks",id:"update-meraki-dashboard-webhooks",level:3}],s={toc:c},l="wrapper";function g(e){let{components:t,...o}=e;return(0,r.kt)(l,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"legacy-api-gateway"},"Legacy API Gateway"),(0,r.kt)("h2",{id:"create-the-api-gateway"},"Create the API Gateway"),(0,r.kt)("p",null,"Now that we have a working Lambda function, we can add an API gateway to receive the request. This process is much quicker than creating the Lambda function."),(0,r.kt)("p",null,"To add the API gateway to our function, we need to add a ",(0,r.kt)("inlineCode",{parentName:"p"},"trigger"),", use the API Gateway as the trigger and leave the auth open."),(0,r.kt)("h3",{id:"add-a-trigger"},"Add a Trigger"),(0,r.kt)("p",null,"To add a ",(0,r.kt)("inlineCode",{parentName:"p"},"Trigger"),", go to the Lambda function page and within the ",(0,r.kt)("strong",{parentName:"p"},"Function overview")," click on ",(0,r.kt)("strong",{parentName:"p"},"Add trigger"),".\n",(0,r.kt)("img",{alt:"Trigger button",src:a(9595).Z,width:"1500",height:"940"})),(0,r.kt)("p",null,"After the ",(0,r.kt)("strong",{parentName:"p"},"Add trigger")," button has been clicked it will load another page called ",(0,r.kt)("strong",{parentName:"p"},"Add trigger"),". It has a drop down for selecting the trigger source. Click on the drop down and choose the ",(0,r.kt)("strong",{parentName:"p"},"API Gateway"),".\n",(0,r.kt)("img",{alt:"Select Gateway",src:a(5132).Z,width:"1056",height:"808"})),(0,r.kt)("p",null,"Once the API Gateway has been selected an ",(0,r.kt)("strong",{parentName:"p"},"Intent")," section will show up. Select ",(0,r.kt)("strong",{parentName:"p"},"Create a new API"),". Once that has been selected it will ask for the ",(0,r.kt)("strong",{parentName:"p"},"API type")," and for the ",(0,r.kt)("strong",{parentName:"p"},"Security")," configuration. Select ",(0,r.kt)("strong",{parentName:"p"},"HTTP API")," for the type and change the ",(0,r.kt)("strong",{parentName:"p"},"Security")," to ",(0,r.kt)("strong",{parentName:"p"},"Open"),". The configuration should look like the below image:\n",(0,r.kt)("img",{alt:"Filled Gateway",src:a(5172).Z,width:"1632",height:"1370"})),(0,r.kt)("p",null,"Click on ",(0,r.kt)("strong",{parentName:"p"},"Add")," on the bottom to create the new API Gateway. If the creation was successful, there should now be a trigger to the left of the Lambda function and a new trigger at the bottom of the window.\n",(0,r.kt)("img",{alt:"Trigger added",src:a(8512).Z,width:"2192",height:"1418"})),(0,r.kt)("h3",{id:"update-meraki-dashboard-webhooks"},"Update Meraki Dashboard Webhooks"),(0,r.kt)("p",null,"Copy the ",(0,r.kt)("strong",{parentName:"p"},"API endpoint")," URL of the new trigger and open the Meraki Dashboard. Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"Systems Manager -> Alerts")," and scroll down to the ",(0,r.kt)("strong",{parentName:"p"},"Webhooks")," section. Click on ",(0,r.kt)("strong",{parentName:"p"},"Add an HTTPS receiver"),".\nGive the webhook a meaningful name, (we used ",(0,r.kt)("inlineCode",{parentName:"p"},"aws"),") and paste the API Endpoint URL into the ",(0,r.kt)("strong",{parentName:"p"},"URL")," box. Then change the ",(0,r.kt)("strong",{parentName:"p"},"Payload template")," to the template you created earlier. Click on ",(0,r.kt)("strong",{parentName:"p"},"Save")," at the bottom of the page. It should look similar to the below image:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"webhook updated",src:a(9721).Z,width:"1874",height:"398"})),(0,r.kt)("p",null,"We have now configured an API Gateway to be used with the Lambda function and can now test the functionality."))}g.isMDXComponent=!0},9721:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/webhook-updated-d1c2bde4120d96f414f11b643a8f49ac.png"},5172:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/filled-gateway-4796ad43edab10c22d6646a916181fca.png"},5132:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/select-api-70de64a6ca9decff12f8127730b72db5.png"},9595:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/select-trigger-5d2fdfaf8a0e4fcfd0fadb6610a07790.png"},8512:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trigger-added-f19319541c5692e19e4aa179d61db897.png"}}]);