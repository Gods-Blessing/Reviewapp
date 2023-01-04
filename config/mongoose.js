const mongoose = require('mongoose');

mongoose.connect(process.env.dburl);

const db = mongoose.connection;


db.on('error', function(){
    console.log("error in connecting to database");
    return;
})

db.once('open', function(){
    console.log("connected to database");
})

