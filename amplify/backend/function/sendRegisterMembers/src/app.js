const AWS = require("aws-sdk");
var express = require("express");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

var app = express();
app.use(express.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/register/member", async (req, res) => {
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

app.listen(3000, () => {
  console.log("App started");
});

module.exports = app;
