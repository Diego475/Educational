const validationResult = require("express-validator");

const transporter = require('../config/mail');
const keys = require('../config/keys');

exports.sendMessage = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400);
    }

    const mailData = transporter.sendMail({
        from: req.body.email,
        to: keys.mailUser.login,
        subject: "Сообщение с сайта EduDigital.",
        html: `${req.body.text}
        <table border="1">
            <tr>
                <th>Имя</th>
                <th>Email</th>
            </tr>
            <tr>
                <th>${req.body.name}</th>
                <th>${req.body.email}</th>
            </tr>
      </table>`
    })

    return res.sendStatus(201)
}