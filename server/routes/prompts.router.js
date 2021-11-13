/* eslint-disable no-console */
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

const table = 'prompts';


router.get('/', (req, res) => {
    console.log('in get');
    const queryText = `SELECT * FROM ${table}`;
    pool.query(queryText,
        [])
        .then((results) => 
        res.send(results.rows))
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
})

module.exports = router;