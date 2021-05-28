var models = require("../../models/patientDiagnosisModels");
var { patientInfo } = require("../../models/patientRegistrationModels");


exports.cbcTestPage = async (req, res) => {
    var ID = req.query.patient_id
    var user = await patientInfo.findOne({ _id: ID })
        .populate({
            path: 'symptoms',
            options: {
                sort: {
                    'dateCreated': -1
                }
            }
        })
        .populate({
            path: 'chestImage',
            options: {
                sort: {
                    'dateCreated': -1
                }
            }
        })
    res.render("test.ejs", { user })

}

exports.cbcTest = async (req, res) => {
    var {
        ID,
        whiteBloodCellCount,
        redBloodCellCount,
        absoluteNeutralCount,
        absoluteLymphocytesCount,
        platelateCount,
        hermatocrite,
        carborndioxide,
        hemoglobin

    } = req.body
    try {
        var patient = await patientInfo.findOne({ _id: ID })
        var created = await models.cbcTest.create({
            whiteBloodCellCount,
            redBloodCellCount,
            absoluteNeutralCount,
            absoluteLymphocytesCount,
            platelateCount,
            hermatocrite,
            carborndioxide,
            hemoglobin
        });
        console.log(patient)
        patient.cbcTest.push(created);
        patient.save()
        res.json({ status: "ok" })
    } catch (e) {
    }
}
module.exports = exports;