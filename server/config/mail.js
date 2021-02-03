const nodemailer = require("nodemailer");
const keys = require('./keys')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: keys.mailUser.login,
        pass: keys.mailUser.password
    }
});

module.exports = transporter;