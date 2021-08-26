var express = require('express');
var router = express.Router();
const {Message} = require('../models/Message');

router.get('/privatemessages', (req, res, next) => {
  const {displayName} = req.query

  Message.find({$or: [{from: displayName}, {to: displayName}]})
      .then(messages => {
          console.log(messages.length)

          return res.json({ messages })
      })
      .catch(err => res.status(400).send(err))
});

router.get('/publicmessages', (req, res, next) => {
  Message.find({private: false})
      .then(messages => {
        return res.json({ messages })
      })
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
