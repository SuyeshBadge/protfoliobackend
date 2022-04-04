var express = require('express');
var router = express.Router();
const db = require('../database');
const userController = require('./../controllers/userController');
/* GET users listing. */
router.get('/', userController.getUsers);
router.post('/newuser', userController.createUser);

module.exports = router;
