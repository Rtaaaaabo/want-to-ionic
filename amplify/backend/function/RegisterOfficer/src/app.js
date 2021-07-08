/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const AWS = require("aws-sdk");
const express = require("express");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

var app = express();
app.use(express.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/register/officer", async function (req, res) {
  console.log("[RegisterOfficer body]", req.body);
  const params = {
    Destination: {
      ToAddresses: ["r.taaaaabo+ses@gmail.com"],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `
          <html lang="ja">
          <head><meta charset="utf-8"></head>
          <body>
          <h3>${req.body.name} さん</h3><br/>
          <p>登録をありがとうございます。</p>
          <p>下記をクリック後にユーザー登録をお願いいたします。</p>
          <p>http://localhost:8100/signup?companyId=${req.body.companyId}&email=${req.body.email}</p>
          </body>
          </html>
          `,
        },
        Text: {
          Charset: "UTF-8",
          Data: `
          ${req.body.name}さん \n
          登録ありがとうございます。\n
          下記をクリック後にユーザー登録をお願いいたします。
          http://localhost:8100/signup?companyId=${req.body.companyId}&email=${req.body.email}
          `,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "担当者のユーザー登録をお願いいたします",
      },
    },
    Source: "r.taaaaabo+ses@gmail.com",
  };
  AWS.config.update({ region: "ap-northeast-1" });
  const ses = new AWS.SES();

  try {
    await ses.sendEmail(params).promise();
    return res.status(200).json({});
  } catch (error) {
    console.log("[register error]", error);
    return res.status(500).send(`Internal Server Error Message: ${error}`);
  }
});

app.listen(3000, function () {
  console.log("App started");
});

module.exports = app;
