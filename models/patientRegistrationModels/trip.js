const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var tripSchema = new Schema({
    date: {
        type: Date
    },
    to: {
        type: String,
    },
    country: {
        type: String,
    },
    city:
    {
        type: String,
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("trip", tripSchema);
