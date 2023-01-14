"use strict";(self.webpackChunklambda_docs=self.webpackChunklambda_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/DEVWKS-2845/intro","docId":"intro"},{"type":"category","label":"Lambda Function","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Create the Lambda Function","href":"/DEVWKS-2845/lambda-docs/create-lambda","docId":"lambda-docs/create-lambda"},{"type":"link","label":"Function Code Setup","href":"/DEVWKS-2845/lambda-docs/code-setup","docId":"lambda-docs/code-setup"},{"type":"link","label":"Functions Explanation","href":"/DEVWKS-2845/lambda-docs/function-explanation","docId":"lambda-docs/function-explanation"},{"type":"link","label":"Function Code Part 1","href":"/DEVWKS-2845/lambda-docs/function-coding-p-1","docId":"lambda-docs/function-coding-p-1"},{"type":"link","label":"Function Code Part 2","href":"/DEVWKS-2845/lambda-docs/function-coding-p-2","docId":"lambda-docs/function-coding-p-2"},{"type":"link","label":"Function Code Part 3","href":"/DEVWKS-2845/lambda-docs/function-coding-p-3","docId":"lambda-docs/function-coding-p-3"},{"type":"link","label":"Upload the Lambda Function","href":"/DEVWKS-2845/lambda-docs/package-function","docId":"lambda-docs/package-function"}],"href":"/DEVWKS-2845/category/lambda-function"},{"type":"link","label":"API Gateway","href":"/DEVWKS-2845/create-api-gateway","docId":"create-api-gateway"},{"type":"link","label":"Testing the deployment","href":"/DEVWKS-2845/testing","docId":"testing"},{"type":"link","label":"Appendix","href":"/DEVWKS-2845/appendix","docId":"appendix"}]},"docs":{"appendix":{"id":"appendix","title":"Appendix","description":"https://docs.aws.amazon.com/lambda/latest/dg/python-package.html","sidebar":"tutorialSidebar"},"create-api-gateway":{"id":"create-api-gateway","title":"API Gateway","description":"Create the API Gateway","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"This guide will take you through the steps it takes to create an AWS Lambda function, create an AWS API endpoint and code a simple function to respond to a webhook from the Meraki Dashboard.","sidebar":"tutorialSidebar"},"lambda-docs/code-setup":{"id":"lambda-docs/code-setup","title":"Function Code Setup","description":"After the lambda function has been created it should take you to a page that is similar to the below image:","sidebar":"tutorialSidebar"},"lambda-docs/create-lambda":{"id":"lambda-docs/create-lambda","title":"Create the Lambda Function","description":"After the Lambda page is open, we can create a new function.  Click on the Create Function button on the right side of the screen to start the creation process.","sidebar":"tutorialSidebar"},"lambda-docs/function-coding-p-1":{"id":"lambda-docs/function-coding-p-1","title":"Function Code Part 1","description":"With the explanation of the lambda_handler code done, we can now start adding code to the handler to handle an event.","sidebar":"tutorialSidebar"},"lambda-docs/function-coding-p-2":{"id":"lambda-docs/function-coding-p-2","title":"Function Code Part 2","description":"So far we have setup our funciton to check if the port is down, import the requests library and store the information we need to make our API call.  Now we will setup our API call.","sidebar":"tutorialSidebar"},"lambda-docs/function-coding-p-3":{"id":"lambda-docs/function-coding-p-3","title":"Function Code Part 3","description":"The issue with using the API Gateway","sidebar":"tutorialSidebar"},"lambda-docs/function-explanation":{"id":"lambda-docs/function-explanation","title":"Functions Explanation","description":"With Lambda functions, there is something called a handler.  This handler is the insertion point of the Lambda function.","sidebar":"tutorialSidebar"},"lambda-docs/package-function":{"id":"lambda-docs/package-function","title":"Upload the Lambda Function","description":"To upload our Lambda fucntion we first need to package our code into a zip file.  After we have packaged it properly, we may then upload the code.","sidebar":"tutorialSidebar"},"testing":{"id":"testing","title":"Testing the deployment","description":"We have a few tests that we can perform to validate our deployment is going to work.  We will check the Meraki Dashboard to validate that it can send webhooks to our API,  then we will generate our own example to send, and finally we will have the Meraki Dashboard send a legitimate event to our API.","sidebar":"tutorialSidebar"}}}')}}]);