const { validationResult } = require("express-validator")

exports.sendMessage = (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const mailData = {
        from: req.body.email,
        to: "sdsdesdfsf5451@gmail.com",
        subject: "Сообщение с сайта EduDigital",
        text: req.body.text,
    }
}