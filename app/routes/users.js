var express = require('express');
var router = express.Router();

/* GET listing of gists for a user name. */
router.get('/:userName/gists', function(req, res, next) {
  res.send('users/userName/gists ' + req.params.userName);
});

module.exports = router;
