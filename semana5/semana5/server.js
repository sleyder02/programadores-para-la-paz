const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor activo');
});

app.get('/saludo', (req, res) => {
  res.send('Hola comunidad');
});

app.get('/mensaje/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Hola ' + nombre);
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto http://localhost:3000');
});

app.post('/reporte', (req, res) => {
    const mensaje = req.body.mensaje;
    res.json({
      estado: "Hola he recivido tu mensaje",
      mensaje: mensaje
    });
  });