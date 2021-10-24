var express = require('express');
var router = express.Router();

/* GET a list of gists marked as favorites. */
// TODO: This prevents a gistId == favorites, but that should be OK for now.
router.get('/favorites', function(req, res, next) {
    res.send('favorites');
});

/* GET a gist by ID. */
router.get('/:gistId', function(req, res, next) {
  res.send('gistId ' + req.params.gistId);
});

/* PUT Mark a gist ID as favorited. */
router.put('/:gistId/favorite', function(req, res, next) {
    res.send('put gistId ' + req.params.gistId);
});

/* DELETE Marks a gist ID as not favorited. */
router.delete('/:gistId/favorite', function(req, res, next) {
    res.send('delete gistId ' + req.params.gistId);
});

  
module.exports = router;
