const mongoose = require("mongoose");


const blogProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: [],
    type: {
      type: String, 
      required: true,
    },
    client: {
      type: String, // Nome do cliente (opcional)
    },
    color: {
      type: String, // Cor predominante (opcional)
    },
    format: {
      type: String, // Formato do projeto (ex: A4, 10x15cm)
    },
    downloadFiles: {
      type: [String], // URLs para download dos arquivos (opcional)
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BlogProject", blogProjectSchema );