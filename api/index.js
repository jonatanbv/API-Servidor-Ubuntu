const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({ mensaje: 'API funcionando desde EC2', status: 'ok' });
});

app.get('/saludo/:nombre', (req, res) => {
  res.json({ hola: req.params.nombre });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`API escuchando en puerto ${PORT}`);
});