const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Conectar a la base de datos MongoDB (asegúrate de configurar la URL de conexión)
mongoose.connect('mongodb://localhost/tu_basededatos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión a MongoDB establecida');
});

// Define el puerto en el que se ejecutará la API
const port = process.env.PORT || 3000;

// Importa las rutas
const prerrequisitosRoute = require('./routes/prerrequisitos');
const materiasCicloRoute = require('./routes/materiasCiclo');
const inscripcionRoute = require('./routes/inscripcion');
const eliminacionRoute = require('./routes/eliminacion');

// Middleware para procesar JSON en las solicitudes
app.use(express.json());

// Configura las rutas
app.use('/api/prerrequisitos', prerrequisitosRoute);
app.use('/api/materias-ciclo', materiasCicloRoute);
app.use('/api/inscripcion', inscripcionRoute);
app.use('/api/eliminacion', eliminacionRoute);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal. Consulta los registros para obtener más detalles.');
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`La API está escuchando en el puerto ${port}`);
});
