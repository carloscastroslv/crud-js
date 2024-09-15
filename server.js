const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('pages'));
app.get('/', (req, res) => {
    res.send('<h1>Carlos Antonino</h1>');
});
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'home', 'index.html'));
});
app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, 'contato', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
