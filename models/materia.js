// models/materia.js
const mongoose = require('mongoose');

const materiaSchema = new mongoose.Schema({
  codigo: {
    type: String,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  creditos: {
    type: Number,
    required: true,
  },
  requisitos: [String], // Códigos de materias requeridas como requisitos
  ciclo: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Materia', materiaSchema);
