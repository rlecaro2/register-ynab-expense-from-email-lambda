/* eslint-disable */
/**
 * Lambda handler
 * @see: http://thecodebarbarian.com/bundling-a-node-js-function-for-aws-lambda-with-webpack
 */
// TODO: modernize
module.exports = fn =>
  function(event, context, callback) {
    fn(event)
      .then(res => {
        callback(null, {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
          },
          body: JSON.stringify(res),
        });
        console.log('done');
      })
      .catch(error => callback(error));
  };

/* eslint-enable */
