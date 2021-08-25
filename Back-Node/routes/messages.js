var express = require('express');
var router = express.Router();
const {Message} = require('../models/Message');

router.get('/', (req, res, next) => {
  const {displayName} = req.query

  Message.find({from: displayName}).or({to: displayName})
      .then(messages => res.json({ messages }))
      .catch(err => res.status(400).send(err))
});

module.exports = router;
