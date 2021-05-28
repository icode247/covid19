const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var patientInfoSchema = new Schema({
    fname: {
        type: String
    },
    dob: {
        type: String
    },
    idNumber: {
        type: String
    },
    occupation: {
        type: String
    },
    maritalStatus: {
        type: String
    },
    age: {
        type: String
    },
    sex: {
        type: String
    },
    phoneNumber: {
        type: String,
        default: Date.now
    },
    education: {
        type: String,
    },
    address: [
        {
            type: Schema.Types.ObjectId,
            ref: "patientAddress"
        }
    ],

    dateCreated: {
        type: Date,
        default: Date.now
    },
    contactExposure: [
        {
            type: Schema.Types.ObjectId,
            ref: "contactExposure"
        }
    ],
    chestImage: [
        {
            type: Schema.Types.ObjectId,
            ref: "chestImage"
        }
    ],
    cbcTest: [
        {
            type: Schema.Types.ObjectId,
            ref: "cbcTest"
        }
    ],
    symptoms: [
        {
            type: Schema.Types.ObjectId,
            ref: "symptoms"
        }
    ]
});

module.exports = mongoose.model("patientInfo", patientInfoSchema);
