const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SalarySchema = new Schema({
    Name: {
        type: String,
        required: true,
    },
    Eid: {
        type: String,
        required: true,
    },
    Nic: {
        type: String,
        required: true,
    },
    JobPosition: {
        type: String,
        required: true,
    },
    NumberofDates: {
        type: String,
        required: true,
    },
    OtHours: {
        type: String,
        required: true,
    },
    BasicSalary: {
        type: String,
        required: true,
    },
    NetSalary: {
        type: String,
        required: true,
    }
});

 
const Salary =mongoose.model('Salary', SalarySchema);
module.exports = Salary;
