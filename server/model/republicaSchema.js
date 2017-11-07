const mongoose = require('mongoose')

const RepublicaSchema = mongoose.model('republica', {
  nome : {type : String, required: true},
  telefone: {type: String, required: true},
  endereco: {type: String, required: true},
  bairro: {type: String, required: true},
  descricao: {type: String, required: true},
  vagas: {type: String, required: true},
  valor: {type: String, required: true},
  senha: {type: String }
})

module.exports = RepublicaSchema;
