const mongoose = require('mongoose')

const BuscaSchema = mongoose.model('busca', {
  bairro : {type : String, required: true}
})

module.exports = BuscaSchema;
