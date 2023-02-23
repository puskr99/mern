var express = require('express');
const verifyToken = require('../middleware/auth');
var router = express.Router();

/* GET users listing. */
router.get('/', verifyToken,function(req, res, next) {
  res.send('respond with a resource');
  
});

module.exports = router;
