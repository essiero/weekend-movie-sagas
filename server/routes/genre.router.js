const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// WE WILL NOT NEED THIS ROUTE FOR THE BASE MODE
router.get('/:id', (req, res) => {
  console.log("req.params.id", req.params.id)
  // Add query to get all genres
  const query = `
  SELECT "movies"."title",
		"genres"."name"
FROM "movies"
	INNER JOIN "movies_genres" ON "movies"."id"="movies_genres"."movie_id"
	INNER JOIN "genres" ON "movies_genres"."genre_id"="genres"."id"
	WHERE "movies"."id" = ${req.params.id};
  `;
  pool
    .query(query)
    .then(result => {
      console.log("result.rows: ", result.rows);
      res.send(result.rows);
    })
    .catch(err => {
      console.log("Error getting current movie genres: ", err);
      res.sendStatus(500);
  });
  
});

module.exports = router;