'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.send = send;

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function send(webhookOpts) {

  var options = {
    method: 'POST',
    uri: webhookOpts.endpoint,
    body: {
      data: webhookOpts.data
    },
    headers: webhookOpts.headers,
    json: true
  };

  (0, _requestPromise2.default)(options).then(function (parsedBody) {
    //successful POST
  }).catch(function (err) {
    // POST failed...
  });
}