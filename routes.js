const users = require('./resources/users/route');
const messages = require('./resources/messages/route');
const rooms = require('./resources/rooms/route');
const auth = require('./resources/auth/route');

module.exports = function(application){
    application.use('/api/v1/users', users);
    application.use('/api/v1/messages', messages);
    application.use('/api/v1/rooms', rooms);
    application.use('/api/v1/auth', auth);
};
