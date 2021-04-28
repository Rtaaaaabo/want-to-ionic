/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_S3STATICFILE_BUCKETNAME
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");
const s3 = new AWS.S3();

/**
 *
 * @param {*} event
 * @returns {Promise<*>}
 */
const putObjectStorage = async () => {
  const testObj = {
    test: "test string",
  };
  return await s3
    .putObject({
      Bucket: process.env.STORAGE_S3STATICFILE_BUCKETNAME,
      Key: "file.json",
      Body: JSON.stringify(testObj),
      ContentType: "application/json",
    })
    .promise();
};

exports.handler = async (event) => {
  const result = await putObjectToStorage();
  const response = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify(result),
  };
  return response;
};
