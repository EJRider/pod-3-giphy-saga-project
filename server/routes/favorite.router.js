const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const sqlText = `SELECT * FROM "favorites";`
  pool.query(sqlText)
      .then(dbRes => {
        res.send(dbRes.rows)
      })
      .catch(dbErr=>{
        console.error('error in getFavorite server', dbErr);
        res.sendStatus(500);
      })
});

// add a new favorite
router.post('/', (req, res) => {
  const sqlText = `INSERT INTO "favorites" ("link")
  VALUES ($1);`;
  const sqlParams = [req.body.link];
  pool.query(sqlText, sqlParams)
  .then(dbRes=>{
    console.log('sucess in postFavorite')
    res.sendStatus(200);
  })
  .catch(dbErr=>{
    console.error('error in postFavorite server', dbErr);
    res.sendStatus(500);
  })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
