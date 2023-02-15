const Router = require('express');
const router = new Router();
const controller = require('../components/authController/authController');
const { check } = require('express-validator');
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', [
  check('username', 'Username cannot be empty').notEmpty(),
  check('password', 'Password must be more than 5 and less than 12 characters').isLength({ min: 5 })
], controller.registration);
router.post('/login', controller.login);
router.get('/check', authMiddleware, controller.checkAuth);


module.exports = router;
