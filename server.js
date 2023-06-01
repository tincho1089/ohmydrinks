const express = require('express');
const app = express();
const port = process.env.FRONTEND_PORT || 5503;

// Configurar el motor de vistas
app.set('view engine', 'ejs');
app.set('views', './views');

// Definir rutas
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/bartender_profesional', (req, res) => {
  res.render('bartender_profesional');
});

app.get('/barmanager', (req, res) => {
  res.render('barmanager');
});

app.get('/eventos', (req, res) => {
  res.render('eventos');
});

app.use(express.static('public'));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor web en funcionamiento en http://localhost:${port}`);
});
