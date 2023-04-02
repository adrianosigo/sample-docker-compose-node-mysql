// esse codigo cria a tabela no banco
const Sequelize = require("sequelize");
const connection = require("./database");
                                    // esse eh o nome da tabela
const Pergunta = connection.define('pergunta',{
    // aqui sao listados os campos da tabela
    titulo:{
        type: Sequelize.STRING, // tipo do campo
        allowNull: false        // campo nao pode ser null
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

// esse linha vai verificar se a tabela existe e criar
// quando force = false, nao irá sobrepor se já existir
Pergunta.sync({force: false}).then(() =>{});

// precisa importar esse arquivo no index.js

module.exports = Pergunta;