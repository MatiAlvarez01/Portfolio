const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const cors = require("cors");
const creds = require("./config");
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router)

const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.URL
)
oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
});
const accessToken = oauth2Client.getAccessToken();

const smtpTransport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        type: "OAuth2",
        user: process.env.USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
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

let port = process.env.PORT;

if (port === null || port === "") {
    port = 3002;
}

app.listen(port, () => {
    console.log("Server listen at port 3002")
})