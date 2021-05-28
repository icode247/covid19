const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var notificationSchema = new Schema({
    creator_name: {
        type: String
    },
    contact_number: {
        type: String
    },
    date: {
        type: String
    },
    email: {
        type: String
    },
    hospital: {
        type: String
    },
    city: {
        type: String
    },
    date_created: {
        type: Date,
        default: Date.now
    },
    case_report: {
        type: String
    },
    Address: [
        {
            type: Schema.Types.ObjectId,
            ref: "patientInfo"
        }
    ]
});

module.exports = mongoose.model("notification", notificationSchema);
