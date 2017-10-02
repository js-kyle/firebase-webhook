'use strict';

var _firebaseAdmin = require('firebase-admin');

var admin = _interopRequireWildcard(_firebaseAdmin);

var _main = require('./main.js');

var main = _interopRequireWildcard(_main);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Initialize the app with a service account, granting admin privileges
admin.initializeApp();

var webhookOpts = {
  endpoint: 'https://requestb.in/1fscuva1',
  headers: { "Authkey": "xyz" },
  data: ['name', 'email']
};

main.subscribe('users/', webhookOpts);