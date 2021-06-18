/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

var hotp = require("otplib").hotp;
var express = require("express");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

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

app.get("/verify-otp/generate", function (req, res) {
  // const companyId = req.body.company_id;
  console.log("[verify-otp req]", req);
  console.log("[verify-otp req query]", req.query);
  const companyId = req.query.companyId;
  const counter = 1;
  const hotpOptions = {
    algorithm: "sha1",
    digits: 30,
    encoding: "ascii",
    // creteHmacKey: hotpCreateHmacKey(),
  };
  try {
    const token = hotp.generate(
      `${companyId}-${process.env.OTP_SECRET_DEV}`,
      counter
    );
    hotp.options = hotpOptions;
    res.json({ success: "succeed!", otp: token });
  } catch (error) {
    res.json({ error: "error!" });
  }
});

app.get("/verify-otp/check", function (req, res) {
  const token = req.body.otp; // OneTimePasswordを取得
  const companyId = req.body.companyId;
  try {
    // authenticator.check(token, process.env.OTP_SECRET_DEV); // 受け取ったtokenは正であるか確認
    res.json({});
  } catch (err) {
    res.json({ error: "error!", message: err });
  }
});

app.post("/verify-otp/check", async function (req, res) {
  console.log("[verify-opt/check req]", req.body);
  const token = req.body.token;
  const companyId = req.body.companyId;
  try {
    // authenticator.check(token, process.env.OTP_SECRET_DEV); // 受け取ったtokenは正であるか確認
    await res.json({});
  } catch (error) {
    await res.json({ error: "error", message: error });
  }
});

app.listen(3000, function () {
  console.log("App started");
});

module.exports = app;
