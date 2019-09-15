const express = require('express')
const app = express();
const mongoose = require('mongoose')
require('dotenv/config')

// IMPORT ROUTES

const routes = require('./routes/index');

app.use('/', routes);
 
mongoose
  .connect(process.env.DB_CONNECTION, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });



//PORT WE ARE LISTENING IN NODEMON
app.listen(process.env.PORT || 5000)