require('./index');
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var symptomsSchema = Schema({
    Fever: {
        type: String,
    },
    Diarrhea: {
        type: String,
    },
    Runny_nose: {
        type: String,
    },
    Vomiting: {
        type: String,
    },
    Muscle_pain: {
        type: String,
    },
    shortness_of_breath: {
        type: String,
    },
    Nausea: {
        type: String,
    },
    Sore_throat: {
        type: String,
    },
    Cough: {
        type: String,
    },
    Headeche: {
        type: String,
    },
    Joint_pain: {
        type: String,
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("symptoms", symptomsSchema);
