/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = async (event, context) => {
  console.log("===================================================");
  console.log(event.httpMethod);
  console.log(event);
  let body = JSON.parse(event.body);
  console.log("***********************");
  console.log(body);
  const fName = body["first_name"];
  const lName = body["last_name"];
  const message = `Hello ${fName} ${lName}. ${body["message"]}`;

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: message,
    }),
  };

  return response;
};
