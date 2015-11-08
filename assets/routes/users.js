"use strict";
var express = require('express');
var router = express.Router();
require('rootpath')();

var settings = require('settings');

router.get('/', (req, res) => {
  res.sendFile(settings.root_path + 'public/index.html');
});


router.get('/users', function(req, res) {
  res.send('respond with a resource');
});

router.post('/users', (req, res) => {
  console.log(req.body);
});

module.exports = router;
