const express = require('express');
const { signup, signin, passwordForgotten, passwordReset } = require('./controller');

const router = express.Router();

router
.route('/new-user')
.post(signup);

router
.route('/login')
.post(signin);

router
.route('/account-recovery')
.post(passwordForgotten);

router
.route('/password-reset')
.patch(passwordReset);

module.exports = router;
