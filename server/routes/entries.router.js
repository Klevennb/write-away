/* eslint-disable no-console */
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.post('/', (req, res) => {
  const userID = req.user.id;
  const contents = req.body.contents || "7";
  const  title  = req.body.title || "7";
  const  genre  = req.body.genre || "7";
  const timeLength = req.body.time_to_write || '23:59:59.9999999';
  const entryLength = req.body.entry_length || "7";
  const entryPrompt = req.body.entry_prompt || "7";
  const isPublic = false

  const queryText = 'INSERT INTO writing_entry (author_id, title, contents, length, genre, time_to_write, prompt, public) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);';
  pool.query(queryText,
    [userID, title, contents, entryLength, genre, timeLength,  entryPrompt, isPublic])
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
