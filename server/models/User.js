const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userShema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    login: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: false
    },
    surname: {
        type: String,
        required: false
    },
    patronymic: {
        type: String,
        required: false
    },
    active: {
        type: Boolean,
        required: true,
        default: false
    },
    institut: {
        type: String,
        required: false
    },
    key: {
        type: String,
        require: false,
        minlength: 25,
        maxLength: 25
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    category: {
        type: String,
        required: true,
        enum: ["Ученик/Студент", "Учитель/Преподователь", "Школа/ССУЗ/ВУЗ"]
    }
});


module.exports = mongoose.model('Users', userShema, 'Users');