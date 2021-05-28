require('./index');
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var cbcTestSchema = new Schema({
    whiteBloodCellCount: {
        type: Number
    },
    redBloodCellCount: {
        type: Number
    },
    absoluteNeutralCount: {
        type: Number
    },
    absoluteLymphocytesCount: {
        type: Number

    },
    platelateCount: {
        type: Number
    },
    hemoglobin: {
        type: Number
    },
    hermatocrite: {
        type: Number
    },
    carborndioxide: {
        type: Number
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model("cbcTest", cbcTestSchema);