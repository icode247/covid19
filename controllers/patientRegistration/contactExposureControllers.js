const { contactExposure, patientInfo, Trip } = require("../../models/patientRegistrationModels");

exports.clinicalPage = (req, res) => {
    console.log(req.body)
}

exports.createClinicalInfo = async (req, res) => {
    var { 
        ID,
        anyTravel,
        anyExposure,
        date,
        to,
        country,
        city
    } = req.body;
    try {
        var patient = await patientInfo.findOne({ _id: ID})
        var created = await contactExposure.create({
            anyTravel,
            anyExposure
        });
        var trip = await Trip.create({
            date,
            to,
            country,
            city
        })
        created.trips.push(trip);
        created.save();

        patient.contactExposure.push(created)
        patient.save()

        res.json({status:'ok'})
    } catch (e) {
    }
}