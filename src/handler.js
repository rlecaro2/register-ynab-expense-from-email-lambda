/* eslint-disable */
// see: http://thecodebarbarian.com/bundling-a-node-js-function-for-aws-lambda-with-webpack
module.exports = fn => function(event, context, callback) {
  console.log('Lambda called');
  fn(event)
    .then(res => {
      callback(null, {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify(res)
      });
      console.log('done');
    }).
    catch(error => callback(error));
};
