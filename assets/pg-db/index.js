/**
 * Created by Constantine on 08.11.2015.
 */
'use strict';
let Sequelize = require('sequelize');

let config = require('../config');

let sequelize = new Sequelize(config.pg.database, config.pg.user, config.pg.password, {
    dialect: 'postgres',
    protocol: "postgres",
    host: config.pg.host,
    port: config.pg.port
});

module.exports = sequelize;