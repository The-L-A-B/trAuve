module.exports = {
  "development": {
    "username": "root",
    "password": process.env.DB_PASS,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": process.env.DB_PASS,
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": process.env.DB_PASS,
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
