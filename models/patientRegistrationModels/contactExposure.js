const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var contactExposureSchema = new Schema({
    anyTravel:
    {
        type: String,
        // default: false,
    },
    anyExposure: {
        type: String,
        // default: false
    },
    trips:[
        {
            type:Schema.Types.ObjectId,
            ref:'trips'
        }
    ],
    dateCreated: {
        type: Date,
        default: Date.now
    }


});

module.exports = mongoose.model("contactExposure", contactExposureSchema);
