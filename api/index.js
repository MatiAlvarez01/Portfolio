const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const cors = require("cors");
const creds = require("./config");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router)

const oauth2Client = new OAuth2(
    "877213886996-ogbkboinj0dqe7vf6lab6ve83oecn60u.apps.googleusercontent.com",
    "oVp4kzA-1p0Ol-d4kPswdLOs",
    "https://developers.google.com/oauthplayground"
)
oauth2Client.setCredentials({
    refresh_token: "1//04VQU2Yj-YFSbCgYIARAAGAQSNwF-L9IrNDbeAVJiOMXqA917CRZA9_loSBHpShOVD1ZM7cc86MZUfSHqYmZbLbS4jMG1ykfkVJA"
});
const accessToken = oauth2Client.getAccessToken();

const smtpTransport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        type: "OAuth2",
        user: creds.USER,
        clientId: creds.CLIENT_ID,
        clientSecret: creds.CLIENT_SECRET,
        refreshToken: creds.REFRESH_TOKEN,
        accessToken: accessToken
    },
    tls: {
        rejectUnauthorized: false
    }
});

router.get("/", (req, res, next) => {
    res.send("Back working")
})

router.post("/sendEmail", (req, res, next) => {
    const name = req.body.name;
    const mail = req.body.mail;
    const subject = req.body.subject;
    const message = `FROM: ${name} \nEMAIL: ${mail} \nMESSAGE: ${req.body.message}`;
    
    const mailOptions = {
        from: mail,
        to: "matialvarez.arg@gmail.com",
        subject: subject,
        text: message
    };
    
    smtpTransport.sendMail(mailOptions, (error, response) => {
        error ? res.send(error) : res.send(response);
        smtpTransport.close();
    })
})

app.listen(3002, () => {
    console.log("Server listen at port 3002")
})