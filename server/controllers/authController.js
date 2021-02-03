const { validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt-nodejs")

// Подключенные модели
const UserModel = require("../models/User");
const EmailModel = require("../models/Email");

// Подклюяенные конфиги
const transporter = require("../config/mail");
const keys = require("../config/keys");

/*                      *
*                       *
*   Метод регистрации   *
*                       *
*                      */
exports.singUp = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");


    // Пытаемся создать пользователя
    try {
        // Проводим проверку наличие полученных данных
        if (Object.keys(req.body).length !== 0) {

            // Объект с результатами валидации
            const errors = validationResult(req);

            // Если есть ошибки, возращаем статус 400
            if (!errors.isEmpty()) return res.status(400).json({ errors });

            // Генерация абсолютно рандомного кода для аутентификации почты пользователя
            const codeChar = "a8bcde6fghij4klm2no53pq1r7stuvw9xyz";

            let code = '';
            for (let i = 0; i < 6; i++) code += codeChar.charAt(Math.floor(Math.random() * codeChar.length));

            // Проверка пользователя на категорию
            if (req.body.category == "Ученик/Студент" || req.body.category == "Учитель/Преподователь") {

                // Создаём объект пользователя
                const User = {
                    email: req.body.email,
                    login: req.body.login,
                    name: req.body.name,
                    password: bcrypt.hashSync(req.body.password),
                    category: req.body.category
                };

                // Создаём пользователя и отслеживаем ошибки
                UserModel.create(User, (err) => {

                    // В случае нахождения ошибки возращем статус "Плохой запрос"
                    if (err) return res.status(400).json({ err });

                    // Если ошибок не было, то авторизуем пользователя
                    const token = jwt.sign({
                        email: User.email,
                        login: User.login,
                        name: User.name,
                        active: false,
                        category: User.category,
                    }, keys.jwt)


                    // Создаётся объект почты
                    const mailData = {
                        from: User.email, // куда: отправка на почту пользователю, который отправил данные
                        to: keys.mailUser.login, // полная информация сдесь: server/config/mail.js
                        subject: "Код подтверждения",
                        text: code // сам код подтверждения
                    };

                    // Сохраняем сообщение в базе данных
                    EmailModel.create(mailData, (err) => {

                        // Проверка на наличие ошибок
                        if (err) return res.status(400).json({ err });

                        // Если ошибок не обнаруженно, отправляем письмо
                        const Data = transporter.sendMail(mailData);

                        // Отдаём клиенту статус "Создано" и сам токен
                        return res.status(201).json({ token, msg: "Пользователь создан" });
                    })
                })
            }

            // Если категория пользователя учебное учреждение...
            else if (req.body.category == "Школа/ССУЗ/ВУЗ") {

                // Константа ключ с символами, предназначенный для учреждений
                const keyChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
                let key = '';
                for (let i = 0; i < 25; i++) key += keyChar.charAt(Math.floor(Math.random() * keyChar.length));

                // Создаём объект учреждения
                const User = {
                    email: req.body.email,
                    login: req.body.login,
                    institut: req.body.institut,
                    password: req.body.password,
                    category: req.body.category,
                    key: key
                };

                // Создаём пользователя и отслеживаем ошибки
                UserModel.create(User, (err) => {

                    // В случае нахождения ошибки возращем статус "Плохой запрос"
                    if (err) return res.status(400).json({ err });

                    // Если ошибок не было то, создаётся объект почты
                    const mailData = {
                        from: User.email, // куда: отправка на почту пользователю, который отправил данные
                        to: keys.mailUser.login, // полная информация сдесь: server/config/mail.js
                        subject: "Код подтверждения",
                        text: code // сам код подтверждения
                    };

                    // Сохраняем сообщение в базе данных
                    EmailModel.create(mailData, (err) => {

                        // Проверка на наличие ошибок
                        if (err) return res.status(400).json({ err });

                        // Если ошибок не обнаруженно, отправляем письмо
                        const Data = transporter.sendMail(mailData);

                        // Отдаём клиенту "Создано"
                        return res.status(201).json({ msg: "Пользователь создан" });
                    })
                })
            }

            // Если категория не определена, то отдавать "Плохой запрос"
            else return res.status(400).json({ msg: "Ошибка, неопределенная категория" });

        }

        // Если форма была пустая, то отдать "Отсутствие контента"
        else return res.send(204).json({ msg: "Форма оказалась пустой" });
    }

    // Отлавливаем ошибки
    catch (e) {
        res.status(400).json({msg: "Не удалось создать пользователя"})
    }
}