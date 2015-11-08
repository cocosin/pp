/**
 * Created by Constantine on 08.11.2015.
 */
"use strict";
let session = require('express-session'),
    MongoStore = require('connect-mongo')(session),
    bcrypt = require('bcryptjs'),
    gen_uuid = require('gen-uuid');
require('rootpath')();

let settings = require('settings'),
    databaseSync = require('../users/user-model').databaseSync,
    User = require('../users/user-model').User;

let currentSession = session({
    uuid: gen_uuid(),
    name: 's128_1.3',
    secret: '__2'
});

console.log(gen_uuid());

let loginFail = (res) => {
    res.status(403);
    res.send('Логин или пароль неверны');
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
            console.log(user.dataValues);

            if (user.dataValues.pass_hash !== password) {
                return loginFail(res);
            }

            req.session.user = {
                id: user.dataValues.id,
                email: user.dataValues.email,
                role: 'default'
            };

            next();
        }
    );
};


module.exports = {
    sign_in
};