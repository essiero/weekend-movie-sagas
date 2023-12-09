const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// WE WILL NOT NEED THIS ROUTE FOR THE BASE MODE
router.get('/', (req, res) => {
  // Add query to get all genres
  res.sendStatus(500)
});

module.exports = router;