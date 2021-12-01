const express = require('express');
const AuthController = require('../controllers/authController');
const authController = require('../controllers/authController')

const router = new express.Router()

router.post('/signup', authController.register)
router.post('/login', AuthController.login)
module.exports = router;