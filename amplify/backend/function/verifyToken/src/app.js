/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

var express = require("express");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
var authenticator = require("otplib").authenticator;
require("dotenv").config();

// declare a new express app
var app = express();
app.use(express.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  await next();
});

app.get("/verify-otp", function (req, res) {
  // Add your code here
  res.json({ success: "get call succeed!", url: req.url });
});

app.get("/verify-otp/generate", function (req, res) {
  // One time passwordを生成する
  const token = authenticator.generate(process.env.OTP_SECRET_DEV);
  console.log("[token]", token);
  console.log("[OTP_SECRET_DEV]", process.env.OTP_SECRET_DEV);
  res.json({ success: "succeed!", opt: token });
});

app.post("/verify-otp", function (req, res) {
  const token = req.body.otp; // OneTimePasswordを取得
  try {
    authenticator.check(token, process.env.OTP_SECRET_DEV); // 受け取ったtokenは正であるか確認
    res.json({}); // 受け取ったTokenが正であれば
  } catch (err) {
    res.json({ error: "error!", message: err });
  }
});

app.put("/verify-otp", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.put("/verify-otp/*", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.delete("/verify-otp", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.delete("/verify-otp/*", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.listen(3000, function () {
  console.log("App started");
});

module.exports = app;
