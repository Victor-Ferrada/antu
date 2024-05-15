const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Sirve archivos estáticos desde el directorio que contiene tu archivo index.html
app.use(express.static('C:/Users/matia/OneDrive/Escritorio/evaluacion2'));

app.get('/', (req, res) => {
  res.send('Hola, mundo!');
});

app.listen(port, () => {
  console.log(`Aplicación escuchando en http://localhost:${port}`);
});