const express = require('express');
const { getMessagesFromRoom, createMessage, deleteMessageById } = require('./controller');

const router = express.Router();

router
.route('/')
.post(createMessage)

router
.route('/:id') 
.get(getMessagesFromRoom)   //room_id
.delete(deleteMessageById); //message_id

module.exports= router;