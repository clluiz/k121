const express = require('express')
const mongoose = require('mongoose');
const app = express()
const Pessoa = require('./Pessoa');
const parser = require('body-parser');

mongoose.connect('mongodb://k121:k121@ds237855.mlab.com:37855/k121',{}, err => console.log(err));

//app.use(parser.urlencoded({extended: true}));
app.use(parser.json());
app.get('/pessoas/:idPessoa', (req, res) => {
    Pessoa.findById(req.params.idPessoa, (err, pessoa) => {
        res.send(pessoa);
    })
});

app.get('/pessoas', (req, res) => {
    Pessoa.find({}, (err, pessoas) => {
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

app.listen(3001, () => console.log('Example app listening on port 3001!'));