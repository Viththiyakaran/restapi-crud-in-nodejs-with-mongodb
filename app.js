const express = require('express');
const mongoose = require('mongoose');
const url ='mongodb://localhost/Grfive';

const app = express();

mongoose.connect( url, { useNewUrlParser: true , useUnifiedTopology:true});
const con = mongoose.connection;

con.on('open', function(){
    console.log('connected')
});
app.use(express.json());
const mcqRouter = require('./routers/mcq');
app.use('/mcq',mcqRouter);



app.listen(3000, function(){
    console.log('server worked');
});