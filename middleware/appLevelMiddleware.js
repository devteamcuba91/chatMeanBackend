const express = require('express');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');

module.exports = (application)=>{
    application.use(helmet());
    application.use(express.json());
    application.use(morgan('dev'));

    application.use(
        '/profile-img',
        express.static(
        path.join(__dirname,'..','statics','profileImg')
    ));

    application.use(
        '/resources',
        express.static(
        path.join(__dirname,'..','statics','resources')
    ));
};