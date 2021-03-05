const express = require('express');
const { getRooms, createRoom, getRoomById, updateRoomById, deleteRoomById } = require('./controller');

const router = express.Router();

router
.route('/')
.get(getRooms);

router
.route('/new')
.post(createRoom);

router
.route('/:id')
.get(getRoomById)
.patch(updateRoomById)
.delete(deleteRoomById);

module.exports= router;