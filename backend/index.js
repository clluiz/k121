const express = require('express')
const mongoose = require('mongoose');
const app = express()
const Pessoa = require('./Pessoa');

mongoose.connect('mongodb://k121:k121@ds237855.mlab.com:37855/k121',{}, err => console.log(err));

app.get('/pessoas/:idPessoa', (req, res) => {
    res.send({
        id: req.params.idPessoa,
        nome: 'Cleiton2',
        email: 'cleiton.vanquish@gmail.com',
    });
});

app.get('/pessoas', (req, res) => {
    Pessoa.find({}, (err, pessoas) => {
        res.send(pessoas);        
    });
});

app.listen(3001, () => console.log('Example app listening on port 3001!'))