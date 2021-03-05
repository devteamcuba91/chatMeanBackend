const express = require('express');
const { getMe, updatePassword, updateProfile, deleteProfile, getContacts, updateContacts, postContact, getUsers, getUserById, updateUserById, deleteUserById } = require('./controller');

const router = express.Router();

router
.route('/me')
.get(getMe);

router
.route('/me/password')
.patch(updatePassword);

router
.route('/me/profile')
.patch(updateProfile)
.delete(deleteProfile);

router
.route('/me/contacts')
.get(getContacts)
.patch(updateContacts)
.post(postContact);

router
.route('/')
.get(getUsers)

router
.route('/:id')
.get(getUserById)
.patch(updateUserById)
.delete(deleteUserById);




module.exports= router;