// eslint-disable-next-line
exports.handler = function (event, context) {
  console.log("Received S3 event:", JSON.stringify(event, null, 2));
  const bucket = event.Records[0].s3.bucket.name; //eslint-disable-line
  const key = event.Records[0].s3.object.key; //eslint-disable-line
  context.done(null, "Successfully processed S3 event"); // SUCCESS with message
};
