/**
 * Created by Constantine on 08.11.2015.
 */
"use strict";
let bcrypt = require('bcryptjs'),
    Sequelize = require('sequelize');

let database = require('../pg-db');

let User = database.define('Users', {
    email: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        },
        field: 'email'
    },
    login: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            is: /^[a-zA-Z0-9](?:[a-zA-Z0-9_\-]*[a-zA-Z0-9])?$/,
            len: [3, 15]
        },
        field: 'login'
    },
    pass_hash: {
        type: Sequelize.STRING,
        allowNull: false,
        set (val) {
            let salt = bcrypt.genSaltSync(10),
                hash = bcrypt.hashSync(val, salt);

            this.setDataValue('pass_hash', hash);
        }
    },
    first_name: {
        type: Sequelize.STRING(20),
        field: 'first_name',
        validate: {
            is: /^[a-zA-Zа-€ј-я'][a-zA-Z-а-€ј-я' ]+[a-zA-Zа-€ј-я']?$/
        }
    },
    last_name: {
        type: Sequelize.STRING(20),
        field: 'last_name'
    },
    age: {
        type: Sequelize.INTEGER,
        field: 'age',
        validate: {
            max: 90,
            min: 13
        }
    },
    birth_date: {
        type: Sequelize.STRING(15),
        allowNull: true,
        validate: {
            //isDate: true, // не проходит проверку null из-за этих валидаций
            //isAfter:  new Date().setFullYear(new Date().getFullYear() - 91),    // only allow date strings after a specific date
            //isBefore: new Date().setFullYear(new Date().getFullYear() - 13)     // only allow date strings before a specific date
        },
        field: 'birth_date'
    },
    country: {
        type: Sequelize.STRING(25),
        field: 'country'
    },
    country_code: {
        type: Sequelize.STRING(2),
        field: 'country_code'
    },
    city: {
        type: Sequelize.STRING(30),
        field: 'city'
    },
    phone: {
        type: Sequelize.STRING(20),
        unique: true,
        field: 'phone'
    },
    gender: {
        type: Sequelize.STRING(1),
        validate: {
            is: /^(f|m)+$/
        },
        field: 'gender'
    },
    area: {
        type: Sequelize.STRING(50),
        validate: {
            is: /^(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)$/
        },
        field: 'area'
    },
    role: {
        type: Sequelize.STRING,
        field: 'role'
    }
}, {
    freezeTableName: true // Model tableName will be the same as the model name
});

module.exports = {
    User,
    databaseSync: database.sync()
};