// routes/inscripcion.js
const express = require('express');
const router = express.Router();

// Ruta para inscripción de materia por carrera seleccionada
router.post('/:carrera', (req, res) => {
  const carrera = req.params.carrera;
  const { materiaCodigo } = req.body;

  // Implementa la lógica para validar y realizar la inscripción de la materia aquí

  // Envía la respuesta con el resultado de la inscripción
  res.json({ resultado: 'Materia inscrita correctamente' }); // Debes proporcionar los datos reales aquí
});

module.exports = router;
