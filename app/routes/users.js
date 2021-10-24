// /users router
// Copyright 2021 Max Sprauer

var express = require('express');
var router = express.Router();

const axios = require('axios').default;
const ghAxios = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000,
  headers: {'Accept': 'application/vnd.github.v3+json'}
});

/* GET listing of gists for a user name. */
router.get('/:userName/gists', function(req, res, next) {
  //TODO: Add pagination or limit?
  ghAxios.get(`/users/${req.params.userName}/gists`)
    .then(function (response) {
      //TODO: This is just throwing the whole github json blob back; we probably want to filter the object to just
      // return the interesting bits.
      res.json(response.data);
    })
    .catch(function (error) {
      res.status(500).send({message: 'There was an error: ' + error});
      console.error(error);
    });
});

module.exports = router;
