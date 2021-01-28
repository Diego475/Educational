const express = require('express');

const authController = require('../controllers/authController');

const router = express.Router();


router.use('/singup', authController.singUp);

module.exports = router

