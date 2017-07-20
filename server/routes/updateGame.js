'use strict';
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { updateGame } = require('../../db/helpers');

// see ~/db/dummyData/updateGame.json for formatting
router.route('/')
  .post((req, res) => {
    console.log(`Updating game ${req.body.gameId} in the db`);
    console.log(`req.body game data: ${req.body.data}`);
    updateGame(req.params.gameId, req.body, res);
  });

module.exports = router;