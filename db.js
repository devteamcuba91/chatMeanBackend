const mongoose = require('mongoose');

mongoose.connect(
    process.env.LOCAL_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
).then(()=>{
    console.log(`connected on port: ${process.env.LOCAL_DB}...`);
});
