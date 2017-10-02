# firebase-webhook
[![npm version](https://badge.fury.io/js/firebase-webhook.svg)](https://badge.fury.io/js/firebase-webhook)

firebase-webhook provides the ability to send WebHooks based on updates to a specified path in a Firebase Realtime Database.

### Installation

This module is installed via NPM:

```sh
$ npm install --save firebase-webhook
```
### Usage

Import the module:
```javascript
const fbwebhook = require('firebase-webhook');
```
Authenicate your app with Firebase using Firebase Admin Node.js SDK

Create a subscription:

```javascript
const webhookOpts = {
  endpoint: 'https://requestb.in/abcdef',
  headers:  {"X-Hello" : "World"},
  data: ['name', 'email']
}

fbwebhook.subscribe('users/', webhookOpts);
```
### API

##### Subscribe
Listen for updates to a specific path in Firebase.

``` javascript
fbwebhook.subscribe(path : String, options: Object);
```

##### Options
`endpoint {String}`
The webhook endpoint for this subscription.

`headers {Object}`
Key value pairs of custom http headers for the WebHook POST.

`data {Array}`
Specify which nodes of the updated child will be sent with the WebHook payload.
### Todos

 - Test coverage


License
----

MIT

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
