const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pessoaSchema = new Schema({
    nome: String,
    email: String,
    amigo: Schema.ObjectId
})

const Pessoa = mongoose.model('Pessoa', pessoaSchema);

module.exports = Pessoa;