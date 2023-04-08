# README

## Introdução

Este repositório contém os arquivos necessários para a execução de um aplicativo Node.js com um banco de dados MySQL e um servidor web NGINX usando o Docker Compose. O aplicativo consiste em uma plataforma simples para perguntas e respostas.

## Arquivos

1. `node/index.js`: Este arquivo contém o código principal do aplicativo Node.js. Ele configura um servidor Express para receber requisições HTTP e conectar com o banco de dados MySQL usando o Sequelize. As rotas definidas são: página principal que lista as perguntas, página para inserir uma nova pergunta, rota para salvar a pergunta no banco de dados, página da pergunta com suas respostas e rota para salvar uma nova resposta no banco de dados.

2. `docker-compose.yaml`: Este arquivo define os serviços que serão executados pelo Docker Compose. Os serviços são: um servidor web NGINX, um aplicativo Node.js e um banco de dados MySQL. O arquivo também configura as portas usadas pelos serviços, as dependências entre eles e a rede Docker a ser usada.

3. `nginx/nginx.conf`: Este arquivo contém a configuração do servidor web NGINX. Ele define o diretório raiz do servidor, a página padrão a ser servida e a rota de proxy para o aplicativo Node.js.

4. `node/database/database.js`: Este arquivo contém a configuração de conexão com o banco de dados MySQL. Ele usa o Sequelize para conectar com o banco de dados e exporta a conexão.

5. `node/database/Pergunta.js`: Este arquivo contém o modelo da tabela Pergunta. Ele define os campos da tabela e sua estrutura. Ele usa o Sequelize para criar e sincronizar a tabela com o banco de dados.

6. `node/database/Resposta.js`: Este arquivo contém o modelo da tabela Resposta. Ele define os campos da tabela e sua estrutura. Ele usa o Sequelize para criar e sincronizar a tabela com o banco de dados.

7. `node/package.json`: Este arquivo contém as dependências do aplicativo Node.js. Ele define as bibliotecas a serem instaladas para o correto funcionamento do aplicativo.

## Instruções de uso

Para executar o aplicativo, siga as seguintes instruções:

1. Clone este repositório em seu computador.
2. Certifique-se de que você tem o Docker e o Docker Compose instalados em sua máquina.
3. Navegue até o diretório do repositório clonado usando o terminal.
4. Execute o comando "docker-compose up" para iniciar o aplicativo.
5. Acesse o aplicativo no seu navegador usando o endereço "http://localhost:8080".

## Conclusão

Este aplicativo fornece uma plataforma simples para perguntas e respostas usando o Node.js e o Docker Compose. Os arquivos necessários para sua execução foram detalhados acima. Esperamos que este aplicativo possa ser útil para fins educacionais ou para desenvolvedores que precisam de um projeto start.
