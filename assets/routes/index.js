var express = require('express');
var router = express.Router();
var users = require('./users');
var config = require('../config');


/* GET home page. */

router.get(config.urls, (req, res) => {
    res.sendFile(settings.root_path + 'public/index.html');
});

module.exports = router;
