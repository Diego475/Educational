const nodemailer = require("nodemailer");

// Конфигурация почты
const mailUser = {
    login: "exemple@gmail.com",
    password: "password"
};

// Конфигурация Node Mailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: mailUser.login,
        pass: mailUser.password
    }
});

module.exports = { transporter, mailUser };