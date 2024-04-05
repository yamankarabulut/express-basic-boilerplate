const express = require('express');
const router = express.Router();

const pageController = require('../controller/page.controller.js')
const languageMiddleware = require('../middlewares/check.language.js')



/* GET routes*/
router.get('/:lang', languageMiddleware.checkLanguage(), pageController.mainPage);

/* POST routes*/
router.post('/post', pageController.postRoute);


module.exports = router;
