var express = require('express');
var router = express.Router();
const {Message} = require('../models/Message');

router.get('/', (req, res, next) => {
  const {displayName} = req.query

  Message.find({from: displayName}).or({to: displayName})
      .then(messages => res.json({ messages }))
      .catch(err => res.status(400).send(err))
});

router.post('/postmessage', (req, res, next) => {
  const { message } = req.body
  console.log(message)

  const newMessage = new Message(message)
  newMessage.save()
      .then((message) => {
        return res.json({message});
      }).catch((err) => {
        console.log(err)
        return res.status(400).send(err)
  })
})

module.exports = router;
