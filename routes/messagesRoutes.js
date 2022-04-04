var express = require('express');
var router = express.Router();
const msgController = require('./../controllers/msgController');
/* GET home page. */
router.get('/', msgController.getMsg);
router.post('/newmsg', msgController.createMsg);
module.exports = router;
