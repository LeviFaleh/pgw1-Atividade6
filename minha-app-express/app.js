const express = require('express');
const app = express();

// Middleware de aplicação para log de acesso
app.use((req, res, next) => {
  console.log(`Acesso à rota: ${req.method} ${req.url}`);
  next();
});

// Middleware para rota /
app.get('/', (req, res) => {
  res.send('<h1>Página Inicial</h1>');
});

// Middleware para rota /about
app.get('/about', (req, res) => {
  res.send('<h1>Página About</h1>');
});

// Middleware para rota /data (apenas POST)
app.post('/data', (req, res) => {
  res.send('<h1>Dados recebidos com POST</h1>');
});

// Middleware para rota /users
app.get('/users', (req, res) => {
  res.send('<h1>Página de Usuários</h1>');
});

// Rota /users/signup
app.get('/users/signup', (req, res) => {
  res.send('<h1>Página de Cadastro (Signup)</h1>');
});

// Rota /users/signin
app.get('/users/signin', (req, res) => {
  const userid = req.query.userid;
  if (userid) {
    // Redireciona para rota dinâmica com o userid
    res.redirect(`/users/${userid}`);
  } else {
    // Redireciona para signup se não tiver userid
    res.redirect('/users/signup');
  }
});

// Rota dinâmica /users/:userid
app.get('/users/:userid', (req, res) => {
  const { userid } = req.params;
  res.send(`<h1>Bem-vindo, usuário ${userid}!</h1>`);
});

// Inicializa servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
