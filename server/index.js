const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');

const AjudaSchema = require('../server/model/ajudaSchema');
const RepublicaSchema = require('../server/model/republicaSchema');

mongoose.connect('mongodb://localhost/repmatch');

const app = express();

app.use(cors());
app.use(bodyParser.json());

//rotas
app.post('/match/republicas', (req, res) =>{
  let query = req.body;
  console.log(query);
  RepublicaSchema.find(query, (err, response) => {
    if(err){
      return res.send(err, 400)
    }
    res.send(response);
  })
});

app.get('/republicas', (req, res) =>{
  RepublicaSchema.find((err, response) => {
    if(err){
      return res.send(err, 400)
    }
    res.send(response);
  })
});

app.post('/anunciarep', (req, res) => {
  let republica = new RepublicaSchema(req.body)
  console.log(republica);
  republica.save((err, response) => {
    if(err){
      return res.send(err, 400);
    }else {
      res.send(response);
    }
  })
})

app.get('/ajuda', (req, res) => {
  AjudaSchema.find((err, perguntas) => {
    if(err){
      return res.send(err, 500);
    }
    res.send(perguntas);
  })
})

app.post('/ajuda', (req, res) => {
  let pergunta = new AjudaSchema(req.body)

  pergunta.save((err, pergunta) => {
    if(err){
      return res.send(err, 404);
    }else {
      res.send(pergunta);
    }
  })
})


//ouvindo o servidor
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});
