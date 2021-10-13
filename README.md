<p align="center">
  <img align="" alt="developeRobot" src="https://github.com/gabiazevedo/Teste_Back_End/blob/main/User_Data_API/developeRobot.gif" height="270px" width="80%" />
</p>

# API REST Users 🚀

Essa aplicação tem como objetivo implementar um banco de dados que armazene os dados de acesso dos
usuários de um suposto sistema e uma API para interação com esses dados.</br>

### A API deve conter 4 (quatro) rotas:

- [x] _Create_
- [x] _Read_
- [x] _Update_
- [x] _Delete_

### Requisitos

- [x] _O banco de dados deve ser criado utilizando MongoDB._
- [x] _A API deve ser desenvolvida utilizando Node.js._
- [x] _O projeto deve ser enviado junto de um arquivo README com explicações sobre como
executar o mesmo._

## Orientações para start da aplicação 📋

1. Clone o repositório

- `git clone git@github.com:gabiazevedo/Teste_Back_End.git`.

2. Instale as dependências

- `npm install`

3. Crie um arquivo `.env` na pasta raiz do projeto para configurar as informações de conexão com o banco de dados.
```
PORT=3000
DB_URL=mongodb://localhost:27017
DB_NAME=user_info
```
4. Para facilitar o fluxo de desenvolvimento usei o Nodemon, que reinicia a aplicação toda vez que se faz necessário editar e salvar arquivos. Para usá-lo basta rodar o comando: `npm i nodemon -D`. Após instalação do pacote, rodar o comando `npm run dev` no terminal e a aplicação já estará conectada ao banco de dabos.

5. As instruções para popular o banco de dados estão no arquivo `userDataBase.js`.

## Testando as requisições 🔌

Para testar a aplicação, basta fazer uma requisição usando o próprio navegador, colocando a URL http://localhost:3001/user (Verbo GET para trazer todos os usuários cadastrados no banco de dados). Porém como nem todo tipo de requisição HTTP pode ser feita diretamente pelo navegador, é recomendado utilizar algum cliente HTTP. Os mais famosos são o [Postman](https://www.postman.com/) e o [Insomnia](https://insomnia.rest/).

Existe uma terceira possibilidade: usar um comando chamado [httpie](https://httpie.io/) que permite fazer uma requisição direto pelo terminal. Para instalar o HTTPie basta rodar `sudo apt install httpie` no terminal. Com o httpie instalado basta usar os comandos abaixo para testar as rotas.

#### - GET /user - Rota que faz a leitura de todos os dados disponíveis no banco

`http GET :3000/user`

#### - GET /user/:id - Rota que busca o usuário pelo seu identificador único

`http GET :3000/user/6165d147d38ed41b25e3fa10`

#### - POST /user - Rota que cria um novo usuário - O campo lastAccess é criado dinâmicamente, introduzindo no banco de dados a _current date_ como data de último acesso.

`http POST :3000/user/ name='Gabriela Azevedo' userName='gabiazevedo' password='123adbgfc'`

#### - PUT /user/:id - Rota que atualiza as informações do usuário filtrado pelo ID retornando o documento atualizado no banco de dados.

`http PUT :3000/user/6165d147d38ed41b25e3fa10 name='Robert C. Martin' userName='clean_code' password='Rob2021'`

#### - DELETE /user/:id - Rota que deleta o usuário de acordo com o ID selecionado

`http DELETE :3000/user/6165d147d38ed41b25e3fa15`

## Detalhes do desenvolvimento 👩‍💻

- Usei o conceito de Arquitetura de Software (MSC) - Model Service Controller.
 
 - Camada de Modelo (M): Arquivos onde iremos executar as operações do banco de dados; criar conexões e executar queries.
 - Camada de Serviço (S): Arquivos que estruturam as regras de negócio; chama os métodos definidos na camada de modelo.
 - Camada de Controladores (C): Interface mais próxima da pessoa usuária ou de uma requisição, vai processar e chamar funções da camada de serviço.

- Apliquei a validação dos dados de entrada (IN) da API com a biblioteca Joi.
- Implementei o parseamento do campo id para melhor leitura dos dados.
- O "lastAccess" cria e atualiza a data de ultimo acesso com a data corrente e de maneira dinâmica.

## Próximas implementações 💯

- Adicionar rota '/login' criando token de validação e autenticação dos dados 'userName' e 'password'.
- Implementação da validação para as outras rotas.

### Desenvolvido por:

💬 Gabriela Azevedo </br>
<a href="https://www.linkedin.com/in/gabiazevedoms/" target="_blank">
  <img src="https://cdn.icon-icons.com/icons2/2558/PNG/512/scribble_social_linkedin_logo_icon_153103.png" width="48px" height="48px">
</a>

