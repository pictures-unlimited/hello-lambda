exports.handler = async (event) => {
  // Extract specific properties from the event object
  const { resource, path, httpMethod, headers, queryStringParameters, body } = event;
/**  const response = {
    resource,
    path,
    httpMethod,
    headers,
    queryStringParameters,
    body,
  };
*/
  return {
    body: "Hello from Lambda and Actions! Hello world!",
    statusCode: 200,
  };
};
