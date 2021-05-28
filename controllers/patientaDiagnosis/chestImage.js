var { chestImage } = require("../../models/patientDiagnosisModels");
var { patientInfo } = require("../../models/patientRegistrationModels");


exports.chestPage = async (req, res) => {
    var ID = req.query.patient_id;
    var patient = await patientInfo.findOne({ _id: ID })
        .populate('cbcTest')
        .populate({ 
            path: "symptoms", 
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
    res.render('clinical.ejs', { user: patient })

}
module.exports = exports