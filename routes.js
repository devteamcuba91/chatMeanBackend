const users = require('./endpoints/users/route');


module.exports = function(application){
    application.use('/api/v1/users', users);
}
