const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    FirstName: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    Nic: {
        type: String,
        required: true,
    },
    
    gender: {
        type: String,
         required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    contactNo: {
        type: String, // Assuming contact number is a string
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Assuming email should be unique
    },
    qualifications: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    
    dateOfJoining: {
        type: Date,
        required: true,
    },
    terminationDate: {
        type: Date,
         
    },
  
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
