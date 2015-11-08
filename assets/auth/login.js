/**
 * Created by Constantine on 08.11.2015.
 */
"use strict";
let session = require('express-session'),
    MongoStore = require('connect-mongo')(session),
    bcrypt = require('bcryptjs'),
    node_uuid = require('node-uuid');
require('rootpath')();

let settings = require('settings'),
    databaseSync = require('../users/user-model').databaseSync,
    User = require('../users/user-model').User;

let currentSession = session({
    uuid: node_uuid.v4(),
    name: 's128_1.3',
    secret: '__2',
    maxAge: 1000*60*60*24*14,
    store: new MongoStore({
        url: 'mongodb://localhost/user-sessions',
            ttl: 24 * 24 * 60 * 60,
            autoRemove: 'interval',
            autoRemoveInterval: 60*24*14
        })
});

console.log(node_uuid.v4());

let loginFail = (res) => {
    res.status(403);
    res.send('Invalid email or password');
    return false;
};

let sign_in = (req, res, next) => {
    let email = req.body.email,
        password = req.body.password;

    if (!req.body.email || !req.body.password) {
        return loginFail(res);
    }

    User.find({where: {email}}).then(
        (user) => {
            if (user.dataValues.pass_hash !== password) {
                return loginFail(res);
            }

            req.session.user = {
                id: user.dataValues.id,
                email: user.dataValues.email,
                role: 'default'
            };

            console.log(req.session);

            next();
        }
    );
};


module.exports = {
    sign_in,
    currentSession
};