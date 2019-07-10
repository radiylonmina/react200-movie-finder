require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/movie/title/:name', (req, res) => {
  movieTitle = req.params.title;
  return axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${movieTitle}`)
    .then(response => res.send(response.data))
    .catch(err => console.log(err))
});

app.get('/movie/:id', (req, res) => {
  movieID = req.params.id;
  return axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${movieID}`)
});

module.exports = app;