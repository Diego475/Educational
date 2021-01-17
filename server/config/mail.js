const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "myname@example.com",
        pass: "password"
    }
});

module.exports = transporter