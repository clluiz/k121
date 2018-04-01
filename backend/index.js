const express = require('express')
const mongoose = require('mongoose');
const app = express()

mongoose.connect('mongodb://clluiz:kalibra150@ds237855.mlab.com:37855/k121');

app.get('/pessoas/:idPessoa', (req, res) => {
    res.send({
        id: req.params.idPessoa,
        nome: 'Cleiton2',
        email: 'cleiton.vanquish@gmail.com',
    });
});

app.listen(3001, () => console.log('Example app listening on port 3001!'))