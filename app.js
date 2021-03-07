const express = require('express');
const app = express();


require('./db');
require('./routes')(app);
require('./middleware/appLevelMiddleware')(app);
require('./server')(app);