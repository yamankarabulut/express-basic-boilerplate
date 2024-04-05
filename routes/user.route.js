const express = require('express');
const router = express.Router();

const userController = require('../controller/user.controller')


// GET Routes
router.get('/:id', userController.getUser);

// POST Routes
router.post('/signup', userController.signup);


module.exports = router;
