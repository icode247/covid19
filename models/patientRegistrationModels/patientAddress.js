const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var patientAddressSchema = new Schema({
    houseNo: {
        type: String
    },
    streetName: {
        type: String
    },
    district: {
        type: String
    },
    city: {
        type: String
    },
    province: {
        type: String
    }, 
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("patientAddress", patientAddressSchema);
