<h1>Instruções para rodar a Aplicação ✨</h1>

### .env
É necessario adicionar a URL do servidor MongoDB em
><p>MONGODB_URI = "URL aqui"</p>

Assim como o Secret JWT
><p>SECRET_JWT = "Sua chave aqui"</p>

Renomear o arquivo
><p>de .env.example para .env</p>
<br>
<h2> Comandos de terminal 🚀</h2>

### npm start
><p>Para rodar o projeto na porta 3000;</p>

### npm run dev
><p>Para adicionar o Listen do Nodemon</p>

### npm install
><p>Para baixar as dependencias do projeto</p>

<br><br>

<h2>Tecnologias utilizadas 🔥</h2>


### Express

O express nos possibilita criar nossa API de uma forma mais prática, menos verboso etc.
<br><hr>

### Nodemon(dependência de desenvolvimento)

Nodemon facilita nossa vida, por ficar escutando e atualizando as alterações feitas sem a nessecidade de parar o servidor (ctrl + c) e rodar novamente ( npm run dev).
<br>

No package.json
"start": "node index",
"dev": "nodemon index"
<br><hr>

### Mongoose

Mongoose vai facilitar nosso acesso ao MongoDB.
<br><hr>

### Bcrypt

Ultilizado para criptografar a senha, de modo que nem o usuario nem o cliente vejam as senhas cadastradas.
<br><hr>

### Dotenv

Variáveis de ambiente é algo extremamente necessário para um projeto back-end para guardar informações senciveis da nossa aplicação.
<br><hr>

### Arquitetura
Utilizaremos Arquitetura monolitica

Basicamente
index/app > rota > controller > service > BD
<br><hr>

### JWT - Json Web Token

Para guardar a sessao do usuario e nosso cliente saber qual usuario está nessa sessao.
<br><hr>

### Swagger-ui-express
Para fazer nosso Deploy
