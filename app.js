const express = require('express');

const ejs = require('express-ejs-layouts');

const app = express();

app.use(express.urlencoded({extended: false}));

app.use(ejs)
app.set('view engine', 'ejs')

app.use('', require('./route/index'));

app.use('/users', require('./route/users'));


const mongoose = require('mongoose')

const db = require('../new-mongo/config/config.js');


mongoose.connect(db.MongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    .then(data => {
        console.log('MongoDB connected')
    })
    .catch(err => {
        console.log('error')
    })

const port = 8080

app.listen(port, console.log('server is running on ' + port))