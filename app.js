const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Configurar el directorio de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas a las vistas

//Site Web Español
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
});

app.get('/servicios', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'services.html'));
});

app.get('/sobre-nosotros', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'about.html'));
});

app.get('/contacto', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'contact.html'));
});

// Site Web English

app.get('/en/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'en-index.html'));
});

app.get('/en/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'en-services.html'));
});

app.get('/en/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'en-about.html'));
});

app.get('/en/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'en-contact.html'));
});




app.listen(port, () => {
    console.log(`Servidor Express en ejecución en el puerto ${port}`);
  });