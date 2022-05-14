const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Database Schema

const EmployeeSchema = new Schema({
    EmployeeID: { type: Number, required: true },
    CompanyName: { type: String, required: true },
    Address: { type: String, required: true },
    PostalCode: { type: String, required: true },
    Email: { type: String, required: true },
    Description: { type: String, required: true },
    Materials: { type: String, required: true },

}, {
    timestamps: true,
});


const Employee  = mongoose.model('Employee ', EmployeeSchema);

module.exports = Employee ;

