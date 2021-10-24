// /gists router
// Copyright 2021 Max Sprauer

var express = require('express');
var router = express.Router();

const axios = require('axios').default;
const ghAxios = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000,
  headers: {'Accept': 'application/vnd.github.v3+json'}
});

/* GET a list of gists marked as favorites. */
// TODO: This prevents a gistId == favorites, but that should be OK for now.
router.get('/favorites', function(req, res, next) {
    res.send('favorites');
});

/* GET a gist by ID. */
router.get('/:gistId', function(req, res, next) {
    ghAxios.get(`gists/${req.params.gistId}`)
      .then(function (response) {
        //TODO Again this is just sending back the whole github json blob
        res.json(response.data);
      })
      .catch(function (error) {
        res.status(500).send({message: 'There was an error: ' + error});
        console.error(error);
      });
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
