const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PessoaSchema = new Schema({
    nome: String,
    email: String,
    amigo: String
})

const Pessoa = mongoose.model('Pessoa', PessoaSchema);

module.exports =  Pessoa;
    