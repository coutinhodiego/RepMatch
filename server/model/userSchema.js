const mongoose = require('mongoose');

const UserSchema = mongoose.model('user', {
  nome: {type: String, required: true},
  email: {type: String, required: true},
  senha: {type: String, required: true}
})
