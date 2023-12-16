const express = require('express');
const moiveRouter = express.Router;
const { addMovie, getAllMovie, getMovieById } = require('../controllers/movie-controller');


moiveRouter.get('/',getAllMoive);
moiveRouter.post('/add',addMoive);
moiveRouter.get('/',getMoiveById);

module.exports = moiveRouter;