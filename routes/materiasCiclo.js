// routes/materiasCiclo.js
const express = require('express');
const router = express.Router();

// Ruta para consultar materias por ciclo
router.get('/:ciclo', (req, res) => {
  const ciclo = req.params.ciclo;

  // Implementa la lógica para consultar las materias por ciclo aquí

  // Envía la respuesta con la información de las materias del ciclo
  res.json({ ciclo, materias: [] }); // Debes proporcionar los datos reales aquí
});

module.exports = router;
