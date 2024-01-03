const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware')

router.post('/signup', userController.signup);
router.get('/list', userController.getUserList);
router.post('/signin', userController.signin);

router.get('/profile',authMiddleware.verifyToken,userController.getProfile);

router.put('/profile/:id',authMiddleware.verifyToken,userController.editProfile);

router.delete('/profile/:id',authMiddleware.verifyToken,userController.deleteProfile);

module.exports =router;