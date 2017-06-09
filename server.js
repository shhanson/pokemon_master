'use strict';
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const pokemonRouter = require('./routes/pokemon');

const app = express();
const port = process.env.PORT || 3000;

dotenv.load();

app.disable('x-powered-by');

//Setup for templating/ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(pokemonRouter);

app.use((_req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, _req, res, _next) => {
    res.status(err.status || 500);
    res.render('pages/error', {
        message: err.message,
        error: err
    });
});

app.listen(port, () =>{
    console.log("Listening on port", port);
});
