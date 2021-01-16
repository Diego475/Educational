const { validationResult } = require("express-validator")

exports.sendMessage = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const mailData = {
        from: req.body.email,
        to: "sdsdesdfsf5451@gmail.com",
        subject: `Сообщение с сайта EduDigital, от ${req.body.name}`,
        text: req.body.text,
    }
    return res.status(201).json({mailData})
}