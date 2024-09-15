const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('pages'));
app.get('/', (req, res) => {
    res.send('<h1>Olá, mundo!<br>Isso é um teste</h1>');
});
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'home', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
