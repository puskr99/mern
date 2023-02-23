var express = require('express');
var router = express.Router();
const verifyToken = require('../middleware/auth')

/* GET index page. */
router.get('/',verifyToken,(req, res) => {
  res.send('respond with a resource');
});

module.exports = router;
