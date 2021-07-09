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
          <h3>${req.body.email} さん</h3><br/>
          <p>${req.body.companyName} の ${req.body.officer}から招待されております。</p>
          <p>下記をクリック後にユーザー登録をお願いいたします。</p>
          <p>http://localhost:8100/signup?companyId=${req.body.companyId}&email=${req.body.email}</p>
          </body>
          </html>
          `,
        },
        Text: {
          Charset: "UTF-8",
          Data: `
          ${req.body.email} さん \n
          ${req.body.companyName} の ${req.body.officer}から招待されております。\n
          下記をクリック後にユーザー登録をお願いいたします。\n
          http://localhost:8100/signup?companyId=${req.body.companyId}&email=${req.body.email}
          `,
        },
      },
      Subject: {
        charset: "UTF-8",
        Data: `${req.body.companyName} へのスペースの会員登録をお願いいたします。`,
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
    console.log("[SendRegisterMembers]", error);
    return res.status(500).send(`Internal Server Error Message: ${error}`);
  }
});

app.listen(3000, () => {
  console.log("App started");
});

module.exports = app;
