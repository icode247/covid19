var models = require("../../models/patientDiagnosisModels")
var { patientInfo } = require("../../models/patientRegistrationModels");
exports.symptomPage = async (req, res) => {
    try {
        res.render("index.ejs")
    } catch (e) {
        console.log(e)
    }
}
exports.Sypmtoms = async (req, res) => {
    var { 
        ID,
        Fever,
        Diarrhea,
        Runny_nose,
        Vomiting,
        Muscle_pain,
        shortness_of_breath,
        Nausea,
        Sore_throat,
        Headeche,
        Joint_pain,
        Cough
    } = req.body
    try {
        var patient = await patientInfo.findOne({ _id: ID})
        var created = await models.symptoms.create({
            Fever,
            Diarrhea,
            Runny_nose,
            Vomiting,
            Muscle_pain,
            shortness_of_breath,
            Nausea,
            Sore_throat,
            Headeche,
            Joint_pain,
            Cough
        });
        patient.symptoms.push(created)
        patient.save();
        res.json({ status:"ok" })
        console.log(patient)
    } catch (e) {
        console.log(e)
    }
}
exports.updateSymptoms = async (req,res)=>{
       var { 
        ID,
        Fever,
        Diarrhea,
        Runny_nose,
        Vomiting,
        Muscle_pain,
        shortness_of_breath,
        Nausea,
        Sore_throat,
        Headeche,
        Joint_pain,
        Cough
    } = req.body
    try {
        var patient = await patientInfo.findOne({_id:ID})
        var created = await models.symptoms.create({
            Fever,
            Diarrhea,
            Runny_nose,
            Vomiting,
            Muscle_pain,
            shortness_of_breath,
            Nausea,
            Sore_throat,
            Headeche,
            Joint_pain,
            Cough
        });
        patient.symptoms.push(created)
        patient.save()
        res.json({ status:"ok" })
    } catch (e) {} 
}
module.exports = exports;