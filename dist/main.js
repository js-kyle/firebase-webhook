'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribe = subscribe;

var _firebaseAdmin = require('firebase-admin');

var admin = _interopRequireWildcard(_firebaseAdmin);

var _webhook = require('./webhook.js');

var webhook = _interopRequireWildcard(_webhook);

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function subscribe(path, webhookOpts) {

  var firstUpdate = true;
  var ref = admin.database().ref(path);

  /* Listen for children added to the provided path. The child_added event is triggered 
    once for each initial child at this location, and it will be triggered again every time 
    a new child is added. We only need the later updates so this is managed through the 
    firstUpdate boolean.
  */
  ref.limitToLast(1).on('child_added', function (snapshot) {
    // ignore the first snapshot of the whole path
    if (firstUpdate) {
      firstUpdate = false;
    } else {
      // prepare webhook data for new children added to path
      var webhookData = {};
      var updateData = snapshot.val();

      _.each(webhookOpts.data, function (d) {
        if (updateData[d] !== 'undefined') {
          webhookData[d] = updateData[d];
        }
      });

      webhookOpts.data = webhookData;
      //send webhook
      webhook.send(webhookOpts);
    }
  });
}