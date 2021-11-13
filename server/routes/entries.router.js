/* eslint-disable no-console */
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

const table = 'writing_entry';


router.post('/', (req, res) => {
  const userID = req.user.id;
  const contents = req.body.contents || "7";
  const  title  = req.body.title || "7";
  const  genre  = req.body.genre || "7";
  const timeLength = req.body.time_to_write || '23:59:59.9999999';
  const entryLength = req.body.entry_length || "7";
  const entryPrompt = req.body.entry_prompt || "7";
  const isPublic = false

  const queryText = `INSERT INTO ${table} (author_id, title, contents, length, genre, time_to_write, prompt, public) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
  pool.query(queryText,
    [userID, title, contents, entryLength, genre, timeLength,  entryPrompt, isPublic])
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.get('/', (req, res) => {
    const userID = req.user.id;
  const queryText = `SELECT * FROM ${table} WHERE author_id = ($1);`;
 pool.query(queryText,
    [userID])
    .then((results) => res.send(results.rows))
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
})

router.put('/', (req, res) => {
  const contents = req.body.contents || "7";
  const title  = req.body.title || "7";
  const genre  = req.body.genre || "7";
  const timeLength = req.body.time_to_write || '23:59:59.9999999';
  const entryLength = req.body.entry_length || "7";
  const isPublic = req.body.isPublic || false;
  const entryId = req.body.entry_id;

  const queryText = `UPDATE ${table}  SET "title" = $1, "contents" = $2, "length"= $3, "genre"= $4, "time_to_write"= $5, "public"= $6 WHERE "id" = $7;`;
  pool.query(queryText,
    [title, contents, entryLength, genre, timeLength, isPublic, entryId])
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });

  // router.put('/:id', (req, res) => {
  //   let entry = req.params.id;
  //   let content = req.body.text;
  //   let newContent = JSON.parse(content);

  //   const queryText = `UPDATE "writing_entry" SET "entry_contents"= $1
  //                      WHERE "id" = $2;`;
  //   pool.query(queryText, [newContent, entry])
  //     .then(() => { res.sendStatus(201); })
  //     .catch((err) => { next(err); });
  // })
});
module.exports = router;
