const express = require('express')
const mongoose = require('mongoose');
const app = express()
const Pessoa = require('./Pessoa');
const parser = require('body-parser');
const shuffle = require('shuffle-array');
const enviarEmail = require('./email');

mongoose.connect('mongodb://k121:k121@ds237855.mlab.com:37855/k121',{}, err => console.log(err));

app.use(parser.json());
app.use(express.static('public'))
app.get('/pessoas/:idPessoa', (req, res) => {
    Pessoa.findById(req.params.idPessoa, (err, pessoa) => {
        res.send(pessoa);
    })
});

app.get('/pessoas', (req, res) => {
    Pessoa.find({})
        .exec((err, pessoas) => {
            res.send(pessoas);
        });
});

app.post('/pessoas', (req, res) => {
    Pessoa.create(req.body, (err, pessoa) => {
        if (err) {
            return;
        }
        res.send(pessoa);
    });
});

app.delete('/pessoas/:idPessoa', (req, res) => {
    Pessoa.remove({ _id: req.params.idPessoa }, (err) => {
        if (!err) {
            res.send('Pessoa removida com sucesso!');
            return;
        }
    })
});

app.put('/pessoas', (req, res) => {
    Pessoa.update(
        { _id: req.body._id }, 
        { $set: { nome: req.body.nome, email: req.body.email }}, 
        (err, pessoa) => {
            if (err) {
                return;
            }
            res.send(pessoa);
        });
});

app.post('/sortear', (req, res) => {
    Pessoa.find({}, (err, pessoas) => {
        const shuffled = shuffle(pessoas);
        var bulk = Pessoa.collection.initializeUnorderedBulkOp();
        shuffled.forEach((pessoa, index) => {
            if (index < shuffled.length - 1) {
                pessoa.amigo = pessoas[index + 1].nome;
                bulk.find({_id: pessoa._id}).update({$set: {amigo: pessoas[index + 1].nome}});
            } else {
                pessoa.amigo = pessoas[0].nome;
                bulk.find({_id: pessoa._id}).update({$set: {amigo: pessoas[0].nome}});
            }
            console.log(pessoa.email);
            enviarEmail(pessoa.email, pessoa.amigo)
        });
        bulk.execute();
        res.send('O sorteio foi realizado. Em breve os participantes irão receber um e-mail com seu amigo.');
    });
});

app.listen(3001, () => console.log('Example app listening on port 3001!'));