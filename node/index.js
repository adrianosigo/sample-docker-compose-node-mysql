// Declarar Constantes do Express
const express = require('express');

// Declarar Constantes do Body Parser
const app = express();

// Definir porta de acesso
const port = 3000;

// Importar Conexão com o Banco de Dados
const connection = require("./database/database");

// Importar Model Pergunta
const Pergunta = require("./database/Pergunta");
// Importar Model Resposta
const Resposta = require("./database/Resposta");

// Conectar com o Banco de Dados
connection
.authenticate()
// Caso a conexão seja bem sucedida, executa o then
.then(() => {
    console.log("Conexão feita com sucesso!");
})
// Caso a conexão nao seja bem sucedida, executa o catch
.catch((msgErro) => {
    console.log(msgErro);
})

//Definir EJS como View Engine padrão do Express
app.set("view engine", "ejs");

//Definir um diretório publico para arquivos estáticos
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// pagina principal que lista as perguntas
app.get("/", (req, res) => {
    // método findAll eh equivalente ao select * from ...
    // raw: true -> busca os dados de forma crua/limpa
    Pergunta.findAll({
        raw: true,
        order: [['id', 'DESC']]
    }).then(perguntas => {
        res.render("index", {
            perguntas: perguntas
        });
    });

});

// pagina para inserir uma pergunta
app.get("/perguntar/", (req, res) => {
    res.render("perguntar");
});

// rota para salvar a pergunta
app.post("/salvarpergunta", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    
    if ( (titulo == '' || descricao == '') ) {
        res.redirect("/");
    } else {
        // salvar dados no banco
        Pergunta.create({
            titulo: titulo,
            descricao: descricao
            //caso gravação der certo, encaminha a pessoa para a pagina inicial
        }).then(() => {
            res.redirect("/");
        });

    }

    //res.send("Formulário Recebido! "+titulo+descricao);
});

app.post("/salvarresposta", (req, res) => {
    var perguntaID = req.body.perguntaID;
    var resposta = req.body.resposta;

    if ( (resposta == '' || perguntaID == '') ) {
        res.redirect("/");
    } else {
        Resposta.create({
            perguntaID: perguntaID,
            descricao: resposta
        }).then(() => {
            res.redirect("/pergunta/"+perguntaID);
        });
    }
});

// pagina da pergunta
app.get("/pergunta/:id", async (req, res) => {
    var id = req.params.id;
    var resp = null;
    //var respostas = '';
    Pergunta.findOne({
        where: { id: id }
    }).then(pergunta => {

        if (pergunta != undefined) {
            Resposta.findAll({
                where: { perguntaID: pergunta.id },
                raw: true,
                order: [['id', 'DESC']]
            }).then(respostas => {
                if ( respostas != undefined) {
                    res.render("pergunta", {
                        pergunta: pergunta,
                        respostas: respostas //[1]
                    });
                } else {
                    res.render("pergunta", {
                        pergunta: pergunta
                    });
                }
            });
        } else {
            res.redirect("/");
        };
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
