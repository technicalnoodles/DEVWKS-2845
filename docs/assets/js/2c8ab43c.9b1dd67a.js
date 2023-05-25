"use strict";(self.webpackChunkdevwks_2845_client=self.webpackChunkdevwks_2845_client||[]).push([[388],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Create the Lambda Function",c={unversionedId:"lambda-docs/create-lambda",id:"lambda-docs/create-lambda",title:"Create the Lambda Function",description:"After the Lambda page is open, we can create a new function. Click on the Create function button on the right side of the screen to start the creation process.",source:"@site/docs/lambda-docs/01-create-lambda.mdx",sourceDirName:"lambda-docs",slug:"/lambda-docs/create-lambda",permalink:"/DEVWKS-2845/lambda-docs/create-lambda",draft:!1,editUrl:"https://cisco.com/docs/lambda-docs/01-create-lambda.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/DEVWKS-2845/lambda-docs/getting-started"},next:{title:"Function Code Setup",permalink:"/DEVWKS-2845/lambda-docs/code-setup"}},l={},s=[],p={toc:s},d="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-the-lambda-function"},"Create the Lambda Function"),(0,a.kt)("p",null,"After the Lambda page is open, we can create a new function. Click on the ",(0,a.kt)("strong",{parentName:"p"},"Create function")," button on the right side of the screen to start the creation process."),(0,a.kt)("p",null,"After the ",(0,a.kt)("strong",{parentName:"p"},"Create function")," has loaded, we want to fill in some fields. We want this function to be authored from scratch using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Author from scratch")," option.",(0,a.kt)("br",{parentName:"p"}),"\n","The input field ",(0,a.kt)("inlineCode",{parentName:"p"},"Function name")," should have a value of ",(0,a.kt)("inlineCode",{parentName:"p"},"shutdownPort"),". You may use another name if you would prefer, but this lab will use shutdownPort.\nThe dropdown for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Runtime")," should be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"Python 3.8"),".",(0,a.kt)("br",{parentName:"p"}),"\n","The last option called ",(0,a.kt)("inlineCode",{parentName:"p"},"Architecture")," will need to be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"x86_64"),"."),(0,a.kt)("p",null,"After all these fields have been set, the function should look similar to the below image:\n",(0,a.kt)("img",{alt:"Filled Function Fields",src:n(670).Z,width:"2602",height:"1296"})),(0,a.kt)("p",null,"Finally, we can click on ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Create function"))," on the bottom right of the page to create our Lambda function."))}u.isMDXComponent=!0},670:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/function-fields-3d0e765bb5cea01a764f1bcca622c8e1.png"}}]);