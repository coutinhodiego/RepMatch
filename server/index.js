const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/repmatch');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/republicas'(req, res) =>{
  res.send('alguma coisa')
});




app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});
