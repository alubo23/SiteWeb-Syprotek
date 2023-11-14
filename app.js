const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Configurar el directorio de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas a las vistas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
});

app.get('/servicios', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'services.html'));
});

app.get('/sobre-nosotros', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'aboutus.html'));
});

app.get('/contacto', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'contact.html'));
});

//Rutas .............

app.listen(port, () => {
    console.log(`Servidor Express en ejecución en el puerto ${port}`);
  });