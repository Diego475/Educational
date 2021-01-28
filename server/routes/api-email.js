const express = require('express')
const { body } = require('express-validator');
const EmailController = require('../controllers/EmailController')
const router = express.Router()

router.use('/send',
    body('email').isEmail().isLength({ min: 1 }).trim(),
    body('text').isLength({ min: 1, max: 1024 }).trim(),
    EmailController.sendMessage)

module.exports = router;