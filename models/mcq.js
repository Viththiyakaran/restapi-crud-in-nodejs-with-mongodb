const mongoose = require('mongoose');

const mcqSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    age : {
        type : String,
        required: true
    },
    address :{
        type:String,
        required : true,
        default: false
    }
})

module.exports = mongoose.model('Mcq', mcqSchema);