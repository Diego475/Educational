const UserModel = require("../models/User") // Модель пользователя
const { transporter, mailUser } = require('../config/mail') // Конфигурация почты
const EmailModel = require("../models/Email") // Модель электронной почты




exports.singUp = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    /*
    *
    *   Проводим проверку наличие полученных данных
    * 
    */
    if (Object.keys(req.body).length !== 0) {
        /*
        *   Константа с символами для генерации уникального кода
        */
        const codeChar = "a8bcde6fghij4klm2no53pq1r7stuvw9xyz";
        /*
        *   Переменная в которой изначально хранится пустая строка
        *   Цикл позволяет генерировать код для отправки письма на почту
        *   Это предназначенно для аутентификации почты
        * 
        *   Аутентификация пока не доступна, из-за некоторых неточностей, но код сгенерировать можно
        * 
        *   Код будет являтся абсолютно рандомным и состоять из 6 символов
        */
        let code = '';
        for (let i = 0; i < 6; i++) {
            code += codeChar.charAt(Math.floor(Math.random() * codeChar.length));
        }
        /*
        *
        *   Проверка пользователя на категорию
        *   Если категория ученика или преподователя...
        * 
        */
        if (req.body.category == "Ученик/Студент" || req.body.category == "Учитель/Преподователь") {
            /*
            *
            *   Создаём объект пользователя  
            * 
            */
            const User = {
                email: req.body.email,
                login: req.body.login,
                name: req.body.name,
                password: req.body.password,
                category: req.body.category
            }
            /*
            *
            *
            * Создаём пользователя и отслеживаем ошибки
            * 
            * 
            */
            UserModel.create(User, (err) => {
                /*
                *
                *
                * В случае нахождения ошибки возращем статус "Плохой запрос"
                * 
                * 
                */
                if (err) {
                    return res.sendStatus(400)
                }
                /*
                *
                *
                * Если ошибок не было то, создаётся объект
                * 
                * 
                */


                const mailData = {
                    from: User.email, // куда: отправка на почту пользователю, который отправил данные
                    to: mailUser.login, // полная информация сдесь: server/config/mail.js
                    subject: "Код подтверждения",
                    text: code // сам код подтверждения
                }


                /*
                *
                *
                * Сохраняем сообщение в базе данных
                * 
                * 
                */
                EmailModel.create(mailData, (err) => {
                    /*
                    *
                    *
                    * Проверка на наличие ошибок
                    * 
                    * 
                    */
                    if (err) {
                        return res.sendStatus(400)
                    }
                    /*
                    *
                    *
                    * Если ошибок не обнаруженно, отправляем письмо
                    * 
                    * 
                    */
                    const Data = transporter.sendMail(mailData);
                    /*
                    *
                    *
                    * Отдаём клиенту "Создано"
                    * 
                    * 
                    */
                    return res.sendStatus(201)
                })
            })
        }
        /*
        *
        *
        * Иначе, если категория пользователя учебное учреждение...
        *   
        * 
        */
        else if (req.body.category == "Школа/ССУЗ/ВУЗ") {
            /*
            *
            * Константа ключ с символами, предназначенный для учреждений
            * 
            */
            const keyChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";

            let key = '';
            for (let i = 0; i < 25; i++) {
                key += keyChar.charAt(Math.floor(Math.random() * keyChar.length));
            }
            /*
            *
            *   Создаём объект пользователя  
            * 
            */
            const User = {
                email: req.body.email,
                login: req.body.login,
                institut: req.body.institut,
                password: req.body.password,
                category: req.body.category,
                key: key
            }
        }
        else {
            return res.sendStatus(400)
        }
    }
    else {
        return res.sendStatus(204)
    }
}