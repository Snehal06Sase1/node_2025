const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    firstName : {
        type: String
    },
    lastName: {
        type: String
    },
    Age: {
        type: Number
    }
})
 const userModel = mongoose.model("User", userSchema);
 module.exports = userModel;

 