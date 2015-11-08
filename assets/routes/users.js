"use strict";
var express = require('express');
var router = express.Router();
require('rootpath')();

var settings = require('settings'),
    sign_in = require('../auth/login').sign_in;

router.get('/users/current', function(req, res) {
  res.send(JSON.stringify(req.session));
});

router.post('/users', sign_in, (req, res) => {
  console.log(req, res);
  res.redirect('/users/current');
});

module.exports = router;
