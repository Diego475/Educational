const nodemailer = require("nodemailer");

// Конфигурация почты
const mailUser = {
    login: "sdsdesdfsf5451@gmail.com",
    password: "JM8PGuRF"
}


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: mailUser.login,
        pass: mailUser.password
    }
});

module.exports = {transporter, mailUser};