"use strict";(self.webpackChunkdevwks_2845_client=self.webpackChunkdevwks_2845_client||[]).push([[13],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=p(n),h=a,m=k["".concat(s,".").concat(h)]||k[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[k]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i=void 0,l={unversionedId:"meraki-docs/meraki",id:"meraki-docs/meraki",title:"meraki",description:"The section below is for if you want to use your own meraki account to work on this lab.  Please use this API Key for this lab: 313e9373cefd4c1f652335c2547e472f45a59876",source:"@site/docs/meraki-docs/01-meraki.mdx",sourceDirName:"meraki-docs",slug:"/meraki-docs/meraki",permalink:"/DEVWKS-2845/meraki-docs/meraki",draft:!1,editUrl:"https://cisco.com/docs/meraki-docs/01-meraki.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Meraki Setup",permalink:"/DEVWKS-2845/category/meraki-setup"},next:{title:"Using the Meraki API & Webhooks",permalink:"/DEVWKS-2845/meraki-docs/meraki-api"}},s={},p=[{value:"Create Meraki API Key",id:"create-meraki-api-key",level:2},{value:"Get the Network ID",id:"get-the-network-id",level:2}],c={toc:p},k="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(k,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"The section below is for if you want to use your own meraki account to work on this lab.  Please use this API Key for this lab: ",(0,a.kt)("strong",{parentName:"p"},"313e9373cefd4c1f652335c2547e472f45a59876")),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Skip to the Network ID section."))),(0,a.kt)("h1",{id:"create--save-meraki-api-key-and-network-id"},"Create & Save Meraki API key and Network ID"),(0,a.kt)("p",null,"In this section, we will go through the process of obtaining a Meraki API key and Organization ID."),(0,a.kt)("p",null,"First we need to sign in to the Meraki dashboard using ",(0,a.kt)("a",{parentName:"p",href:"https://dashboard.meraki.com"},"dashboard.meraki.com"),"."),(0,a.kt)("p",null,"It should take you to a login page for the Meraki Dashboard. Please sign in using the credentials provided to you. If asked for an Organization to log into, please choose the ",(0,a.kt)("inlineCode",{parentName:"p"},"CiscoLive")," organization."),(0,a.kt)("p",null,"After getting logged in, we need to generate an API key."),(0,a.kt)("h2",{id:"create-meraki-api-key"},"Create Meraki API Key"),(0,a.kt)("p",null,"Go to the top right where it has your username and select it. A drop down should show up and then select ",(0,a.kt)("inlineCode",{parentName:"p"},"My Profile"),". It should look similar to what is below:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"profile",src:n(8187).Z,width:"212",height:"135"})),(0,a.kt)("p",null,"After your profile loads, scroll down to the ",(0,a.kt)("strong",{parentName:"p"},"API access")," section. Then click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Generate new API key"),"."),(0,a.kt)("p",null,"It will bring up a popup that has your API key like in the below image:\n",(0,a.kt)("img",{alt:"api key",src:n(617).Z,width:"1022",height:"388"})),(0,a.kt)("p",null,"Copy the API key and store it in a file locally. Then check the ",(0,a.kt)("inlineCode",{parentName:"p"},"I have stored my new API key")," box and click on done."),(0,a.kt)("h2",{id:"get-the-network-id"},"Get the Network ID"),(0,a.kt)("p",null,"On the left side of the page please hover over ",(0,a.kt)("inlineCode",{parentName:"p"},"Network")," and select the trainee network that is the same as your login ID."),(0,a.kt)("p",null,"It should look similar to what is below:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Network")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"traineeX"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"network switching",src:n(5064).Z,width:"796",height:"522"})),(0,a.kt)("p",null,"It should look like the above where the ",(0,a.kt)("strong",{parentName:"p"},"X")," is the number of your trainee login."),(0,a.kt)("p",null,"Select ",(0,a.kt)("inlineCode",{parentName:"p"},"Systems Manager")," then ",(0,a.kt)("inlineCode",{parentName:"p"},"General")," and scroll to the bottom. In the ",(0,a.kt)("inlineCode",{parentName:"p"},"SecureX")," section, you should see the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Network ID")),". Make a copy of this."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Alternatively"))," if you are doing this in the future, you can get the Network ID a different way using the Meraki Dashboard API"),(0,a.kt)("p",{parentName:"admonition"},"Go to the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.cisco.com/meraki/api-latest/"},"Meraki Developer")," documentation. Once here, please search for ",(0,a.kt)("inlineCode",{parentName:"p"},"Get Organization Networks")," in the search bar on the left. It should load the API page for that call. Now click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Configuration")," button on the right side. Replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"APIKey in header")," field with the one you generated earlier. The rest can be left alone, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Save"),"."),(0,a.kt)("p",{parentName:"admonition"},"Still on the right side, please enter the Organization ID we obtained earlier in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Organization Id")," box. Then click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Run"),". It will return the networks associated with your account. Near the bottom, your network should show up. It will be named after your username. Please save the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," field.")),(0,a.kt)("p",null,"Now we can start working with the Meraki API and a create a custom webhook."))}d.isMDXComponent=!0},617:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/generate-api-key-fb1bac25eb90f75f97f7d18a3a802f58.png"},5064:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/net-switch-721802dee7ae9f033a7f659613cdb8fa.jpg"},8187:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/select-profile-5f847d442841e42fd5a49cb06c1421c3.png"}}]);