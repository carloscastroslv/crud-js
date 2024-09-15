const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('pages'));

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
