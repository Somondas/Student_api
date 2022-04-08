const mongoose = require("mongoose");
const validator = require('validator');


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email already present"],
        validate(val){
            if(!validator.isEmail(val)){
                throw new Error("Invalid Email")
            }
        }

    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
        
    }
    
})
// for creating a new collection
const Student = new mongoose.model("Student", studentSchema);

module.exports = Student