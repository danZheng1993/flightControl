const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(cors());

const cheapFlightUrl = 'https://obscure-caverns-79008.herokuapp.com/cheap';
const businessFlightUrl = 'https://obscure-caverns-79008.herokuapp.com/business';

app.get('/cheap', async function (req, res, next) {
  try {
    const result = await axios.get(cheapFlightUrl)
      .then(response => response.data);
    return res.send(JSON.stringify(result));
  }catch (err) {
    return next(err);
  }
});

app.get('/business', async function (req, res, next) {
  try {
    const result = await axios.get(businessFlightUrl)
      .then(response => response.data);
    return res.send(JSON.stringify(result));
  }catch (err) {
    return next(err);
  }
});

app.listen(process.env.PORT || 8080);