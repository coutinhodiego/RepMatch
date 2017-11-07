const mongoose = require('mongoose');

const AjudaSchema = mongoose.model('ajuda', {
  pergunta: {type: String, required: true}
});

module.exports = AjudaSchema;
