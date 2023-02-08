const Router = require('express');
const router = new Router();
const profileController = require('../components/profileController');
const { check } = require('express-validator');
const authMiddleware = require('../middleware/authMiddleware')

router.post('/profile', profileController.getProfile);
router.post('/profiles', profileController.setProfile);
// router.post('/login', controller.login);
// router.get('/check', authMiddleware, controller.checkAuth);

module.exports = router;