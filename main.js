import * as admin from 'firebase-admin';
import * as webhook from './webhook.js';
import * as _ from 'lodash';

export function subscribe(path, webhookOpts) {

  let firstUpdate = true;
  const ref = admin.database().ref(path);

  /* Listen for children added to the provided path. The child_added event is triggered 
    once for each initial child at this location, and it will be triggered again every time 
    a new child is added. We only need the later updates so this is managed through the 
    firstUpdate boolean.
  */
  ref.limitToLast(1).on('child_added', (snapshot) => {
    // ignore the first snapshot of the whole path
    if (firstUpdate) {
      firstUpdate = false; 
    } else {
      // prepare webhook data for new children added to path
      let webhookData = {};
      const updateData = snapshot.val();

      _.each(webhookOpts.data, function(d) {
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
