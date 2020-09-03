const express = require('express');
const authController = require('../Controllers/Auth/LoadController');
const authGuard = require('../Guards/Auth');

const router = express.Router();

router.post('/signUp', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/verify/:token', authController.verify);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);
router.post('/newsletter', authController.saveEmail);
//For Admin Creation
router.get(
  '/getUser',
  authGuard.protect,
  authController.getMe,
  authController.getUser
);

module.exports = router;
