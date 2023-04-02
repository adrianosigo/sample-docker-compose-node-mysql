const Sequelize = require("sequelize");
const connection = require("./database");

const Resposta =  connection.define('resposta',{
    perguntaID:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Resposta.sync({force: false});

module.exports = Resposta;