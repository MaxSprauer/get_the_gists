// /gists router
// Copyright 2021 Max Sprauer

//TODO validate parameters on every handler

var express = require('express');
var router = express.Router();

const axios = require('axios').default;
const ghAxios = axios.create({
    baseURL: 'https://api.github.com',
    timeout: 1000,
    headers: {'Accept': 'application/vnd.github.v3+json'}
});

var favModel = require('../models/favorites.js');

/* GET a list of gists marked as favorites. */
// TODO: This prevents a gistId == favorites, but that should be OK for now.
router.get('/favorites', function(req, res, next) {
    favModel.getFavorites()
        .then((favs) => {
            res.json(favs)
        })
        .catch((error) => {
            res.status(500).send({message: 'There was an error: ' + error})
        });
});

/* GET a gist by ID. */
router.get('/:gistId', function(req, res, next) {
    ghAxios.get(`gists/${req.params.gistId}`)
        .then((response) => {
            //TODO Again this is just sending back the whole github json blob
            res.json(response.data);
        })
        .catch((error) => {
            res.status(500).send({message: 'There was an error: ' + error});
            console.error(error);
        });
});

/* PUT Mark a gist ID as favorited. */
router.put('/:gistId/favorite', function(req, res, next) {
    favModel.addFavorite(req.params.gistId)
        .then((gistId) => {
            res.send('Added favorite for ' + gistId);
        })
        .catch((error) => {
            res.status(500).send({message: 'There was an error: ' + error})
        });
});

/* DELETE Marks a gist ID as not favorited. */
router.delete('/:gistId/favorite', function(req, res, next) {
    favModel.deleteFavorite(req.params.gistId)
        .then((gistId) => {
            res.send('Deleted favorite for ' + gistId)
        })
        .catch((error) => {
            res.status(500).send({message: 'There was an error: ' + error})
        });
});
  
module.exports = router;
