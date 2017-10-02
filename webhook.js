import rp from 'request-promise';

export function send(webhookOpts) {

  let options = {
    method: 'POST',
    uri: webhookOpts.endpoint,
    body: {
      data: webhookOpts.data
    },
    headers : webhookOpts.headers,
    json: true
  };

  rp(options)
  .then((parsedBody) => {
    //successful POST
  })
  .catch((err) => {
    // POST failed...
  });

}



