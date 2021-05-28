require('./index');
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var chestImageSchema = Schema({
    img: {
        data: Buffer,
        contentType: String
    },
    caseReports:{
        type: String,
    },
    recomendation:{
        type:String
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("chestImage", chestImageSchema);
