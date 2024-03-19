const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const maintainSchema = new Schema({


    Equipment_name: {
        type : String,
        required :  true
    },
    
    Description: {
        type : String,
        required : true
    },
    
    Maintenance_type:{
        type : String,
        required : true
    },
    
    Sheduled_date: {
        type : String,
        required : true
    },
    
    Status: {
        type : String,
        
    },
    
    Completeded_date: {
        type : String,
        
    },
    
    Technician: {
        type : String,
        required : true
    },
    
    
    })
    
    const Maintainance = mongoose.model("Maintainance", maintainSchema);
    
    module.exports =Maintainance;
    