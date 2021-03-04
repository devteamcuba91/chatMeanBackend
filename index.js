const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');

const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const PORT  = process.env.PORT || 3000;

app.use(express.json())
app.use(express.static(
    path.join(__dirname,'statics')
))

require('./db')
routes(app);


app.listen(
    PORT,
    ()=>{console.log(`server listen on port ${PORT}`)}
)
