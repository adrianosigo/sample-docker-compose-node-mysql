const Sequelize = require('sequelize');

const connection = new Sequelize('db_node', 'db_user', '123456', {
    host: 'db',
    dialect: 'mysql'
});

module.exports = connection;