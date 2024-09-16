const express = require('express');
const path = require('path');

const app = express();

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'carlos',
    password: 'reactnode',
    database: 'loja'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

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
