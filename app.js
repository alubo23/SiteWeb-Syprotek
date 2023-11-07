const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Configurar el directorio de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas a las vistas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'templates', 'index.html'));
});

app.get('/servicios', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'templates', 'services.html'));
});

app.get('/sobre-nosotros', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'templates', 'aboutus.html'));
});

//Rutas .............

app.listen(port, () => {
    console.log(`Servidor Express en ejecución en el puerto ${port}`);
  });