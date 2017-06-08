'use strict';
const fs = require('fs');
const path = require('path');

//Setup for knex stuff
const env = 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

//Setup for express server and router
const express = require('express');
const router = express.Router();

//Variable to hold table column names
const headers = ['pokedex_id', 'name', 'type', 'evolves_from', 'image_url'];


//Routes
router.get('/pokemon', (req, res, next) => {

    knex('pokemon')
    .then( (result) => {
        res.render('pages/index', {
            data: result
        });
    })
    .catch( (err) =>{
        console.error(err);
        err.status = 500;
        next(err);
        knex.destroy();
    })


});

router.get('/pokemon/:id', (req, res, next) => {

    let id = Number.parseInt(req.params.id);

    if (Number.isNaN(id) || id < 1) {
        next();
    } else {
        //Need to add code to check if the ID is contained in the Database firs.
        //If the user attempts to access an ID out of range, should be 404.
        //Currently, 500 gets sent.
        knex('pokemon').select(headers)
        .where('pokedex_id', id)
        .then((result) => {
            res.render('pages/profile', {
                data: result[0]
            });
        })
        .catch( (err) => {
            console.error(err);
            err.status = 500;
            next(err);
            knex.destroy();
            //process.exit(1);
        });


    }
});

module.exports = router;
