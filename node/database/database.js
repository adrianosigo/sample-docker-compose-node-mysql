const Sequelize = require('sequelize');

const connection = new Sequelize('nodedb', 'dbuser', '123456', {
    host: 'db',
    dialect: 'mysql'
});

module.exports = connection;