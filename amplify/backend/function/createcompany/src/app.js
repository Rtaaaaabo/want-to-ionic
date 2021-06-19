/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const AWS = require("aws-sdk");
const express = require("express");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

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

app.post("/register/company", async (req, res) => {
  console.log("[RegisterCompany req]", req);
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
          <h3>名前</h3>
          <p>${req.body.name}</p><br/>
          <h3>メールアドレス</h3>
          <p>${req.body.email}</p>
          <p>下記をクリック後に本登録をお願いいたします。</p>
          <p>http://localhost:8100/registration-company?token=${req.body.otp}</p>
          </body>
          </html>
          `,
        },
        Text: {
          Charset: "UTF-8",
          Data: `
          名前 \n
          ${req.body.name}様 \n
          メールアドレス \n
          ${req.body.email}
          下記をクリック後に本登録をお願いいたします。
          http://localhost:8100/registration-company?token=${req.body.otp}
          `,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "お問い合わせを受け付けました",
      },
    },
    Source: "r.taaaaabo+ses@gmail.com",
  };
  AWS.config.update({ region: "ap-northeast-1" });
  const ses = new AWS.SES();
  try {
    await ses.sendEmail(params).promise();
    res.json({});
    return;
  } catch (e) {
    res.status(500).send(`Internal Server Error Message: ${e}`);
    return;
  }
});

app.post("/update/company", async (req, res) => {
  console.log("[UpdateCompany]", req);
  const params = {
    Destination: {
      ToAddresses: ["r.taaaaabo+ses@gmail.com"],
    },
    Message: {
      Subject: {
        Charset: "UTF-8",
        Data: "本登録が完了しました",
      },
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `
          <html lang="ja">
          <head><meta charset="utf-8"></head>
          <body>
          <h3>${req.body.name}</h3>様<br/>
          <p>会社情報の本登録が完了しました。</p>
          <p>下記からログインを行い、ユーザーを招待し、初めてください。</p>
          <p>http://localhost:8100/login</p>
          </body>
          </html>
          `,
        },
        Text: {
          Charset: "UTF-8",
          Data: `
          名前: ${req.body.name}\n
          会社情報の本登録が完了しました。
          下記からログインを行い、ユーザーを招待し、初めてください。
          http://localhost:8100/login
          `,
        },
      },
    },
    Source: "r.taaaaabo+ses@gmail.com",
  };
  AWS.config.update({ region: "ap-northeast-1" });
  const ses = new AWS.SES();
  try {
    await ses.sendEmail(params).promise();
    res.json({});
    return;
  } catch (e) {
    res.status(500).send(`Internal Server Error Message: ${e}`);
    return;
  }
});

app.listen(3000, function () {
  console.log("App started");
});

module.exports = app;
