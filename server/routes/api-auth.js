const express = require('express');
const { body } = require('express-validator')
const authController = require('../controllers/authController');
const router = express.Router();


router.use(
    '/singup',
    body('email').not().isEmpty().isEmail().trim(),
    body('login').not().isEmpty().trim().isAlphanumeric(),
    body('name').trim().contains(),
    body('institut').trim().contains(),
    body('password').not().isEmpty().trim().isLength({ min: 8 }),
    body('category').isIn(["Ученик/Студент", "Учитель/Преподователь", "Школа/ССУЗ/ВУЗ"]),
    authController.singUp);

module.exports = router

