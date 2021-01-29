const mongoose = require('mongoose');
const email = require('../config/mail')


const Schema = mongoose.Schema;

const emailShema = new Schema({
    from: {
        type: String,
        required: true,
        default: email.mailUser.login
    },
    to: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: false
    },
    html: {
        type: String,
        required: false
    },
});


module.exports = mongoose.model('email', emailShema, 'email');