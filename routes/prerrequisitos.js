// routes/prerrequisitos.js
const express = require('express');
const router = express.Router();

// Ruta para consultar prerrequisitos de una materia por código
router.get('/:codigo', (req, res) => {
  const codigoMateria = req.params.codigo;

  // Implementa la lógica para consultar los prerrequisitos de la materia aquí

  // Envía la respuesta con la información de los prerrequisitos
  res.json({ codigoMateria, prerrequisitos: [] }); // Debes proporcionar los datos reales aquí
});

module.exports = router;
