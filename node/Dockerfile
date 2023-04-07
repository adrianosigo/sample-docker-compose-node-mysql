# Imagem base Nodejs e Alpine
FROM node:19-alpine3.16

# Definir o diretório de trabalho
WORKDIR /usr/src/app

#COPIAR o arquivo index.js para o diretório de trabalho WORKDIR
COPY . .

# Instalar dependências
RUN npm install

# Instala o dockerize - https://github.com/jwilder/dockerize
# Dockerize é uma ferramenta que permite que você espere por um serviço TCP ou um sinal de um processo antes de continuar.
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Expor porta 3000 internamente
EXPOSE 3000
