// routes/eliminacion.js
const express = require('express');
const router = express.Router();

// Ruta para eliminar inscripciones de materias
router.delete('/:carrera/:materiaCodigo', (req, res) => {
  const carrera = req.params.carrera;
  const materiaCodigo = req.params.materiaCodigo;

  // Implementa la lógica para eliminar la inscripción de la materia aquí

  // Envía la respuesta con el resultado de la eliminación
  res.json({ resultado: 'Inscripción eliminada correctamente' }); // Debes proporcionar los datos reales aquí
});

module.exports = router;
