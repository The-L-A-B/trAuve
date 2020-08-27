require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: process.env.DB_PASS,
    database: 'trauve',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
  },
  test: {
    username: 'root',
    password: process.env.DB_PASS,
    database: 'trauve_testdb',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
  },
  production: {
    username: 'root',
    password: process.env.DB_PASS,
    database: 'trauve_proddb',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
  },
};
