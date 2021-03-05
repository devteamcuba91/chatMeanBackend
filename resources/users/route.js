const express = require('express');
const { getMeHandler, getUsersHandler } = require('./handler');

const router = express.Router();

router
.route('/')
.get(getUsersHandler);


router
.route('/Me')
.get(getMeHandler);

module.exports= router;