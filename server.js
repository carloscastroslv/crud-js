const express = require('express');
const path = require('path');
const Sequelize = require('sequelize');

const app = express();

// const mysql = require('mysql');

const sequelize = new Sequelize('loja', 'carlos','reactnode',{
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log('Conexão realizada com sucesso');
}).catch(function(err){
    console.log('Erro ao realizar a conexão' + err);
})

// const Tarefa = sequelize.define('tarefa',{
//     Descricao: {
//         type: Sequelize.STRING,
//     },
//     status: {
//         type: Sequelize.BOOLEAN
//     }
// })

// Tarefa.sync({force: true});

// const Produtos = sequelize.define('produtos',{
//     Descricao: {
//         type: Sequelize.STRING,
//     },
//     Preco: {
//         type: Sequelize.DECIMAL(10,2),
//     },
//     Quant: {
//         type: Sequelize.INTEGER
//     }
// });

// Produtos.sync({force: true});

// Tarefa.create({
//     Descricao: "Continuar Projeto Laravel",
//     status: 1
// });

// Produtos.create({
//     Descricao: "Banana",
//     Preco: 3.00,
//     Quant: 10
// });

const Users = sequelize.define('users',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,  // Define autoincrement
        primaryKey: true,     // Define como chave primária
        allowNull: false      // Garante que o campo não seja nulo
      },
    Descricao: {
        type: Sequelize.STRING,
        allowNull: false      // Garante que o campo não seja nulo
    },
    Usuario: {
        type: Sequelize.STRING,
        allowNull: false      // Garante que o campo não seja nulo
    },
    Passw: {
        type: Sequelize.STRING,
        allowNull: false      // Garante que o campo não seja nulo
    }
});

Users.sync({force: true});

app.use(express.static('src/pages'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home', 'index.html'));
});

app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, 'contato', 'index.html'));
});
app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'sobre', 'index.html'));
});
app.get('/empresa', (req, res) => {
    res.sendFile(path.join(__dirname, 'empresa', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
