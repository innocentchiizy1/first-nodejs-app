var express = require('express');

var route = express.Router();


route.get('/login', (req, res) => res.render('login'))

route.get('/register', (req, res) => res.render('register'))

route.post('/register', (req, res) => {
    console.log(req.body)
res.send('hello')
});

module.exports = route;