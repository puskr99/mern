var express = require('express');
var router = express.Router();

/* GET Logout. */
router.get('/', (req, res) => {
  res.status(205).clearCookie('jwtoken')
  res.send('Logout Page')
});

module.exports = router;
