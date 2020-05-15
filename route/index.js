var express = require('express');

var route = express.Router();


route.get('/welcome', (req, res) => res.render('welcome'))

route.get('/dashboard', (req, res) => res.render('dashboard'))



module.exports = route;