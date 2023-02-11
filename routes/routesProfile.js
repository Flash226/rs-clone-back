const Router = require('express');
const router = new Router();
const profileController = require('../components/profileController/profileController');
const { check } = require('express-validator');
const authMiddleware = require('../middleware/authMiddleware')
const rateController = require('../components/rateController/rateController');

router.post('/profile', profileController.getProfile);
router.post('/profiles', profileController.setProfile);
router.get('/rate/:id', rateController.getRate);
router.post('/rate', rateController.setRate);

module.exports = router;
