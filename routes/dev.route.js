const express = require('express');
const router = express.Router();

const devController = require('../controller/dev.controller')


// GET Routes
router.get('/get-db', devController.getDB);

// POST Routes
router.post('/create-language', devController.createLanguage);
router.post('/create-fake-db', devController.createFakeDB);


module.exports = router;
