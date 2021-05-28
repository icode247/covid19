var models = require("../../models/patientRegistrationModels")
const { check, validationResult } = require('express-validator');
const axios = require("axios");
const { model } = require("mongoose");

exports.patientPage = async (req, res) => {
   console.log(req.user)
    res.render("patient.ejs")
}
exports.patientAll = async (req, res) => {
    var data = await axios.get('http://127.0.0.1:2000/patient/patients') 
    res.render("diagnosis.ejs", {data:data.data})
}

exports.getUser = async(req,res)=>{
    var patients = await models.patientInfo.find({})
    res.json(patients);
}
//Creeat add patient info to db
exports.createInfo = async (req, res) => {
    const errors = validationResult(req);
	if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
	}
    console.log(req.body)
    var {
        fname,
        dob,
        idNumber,
        occupation,
        age,
        maritalStatus,
        phoneNumber,
        education,
        houseNo,
        streetName,
        district,
        city,
        province,
        sex,      
    } = req.body
    try {
        //patient info
        var created = await models.patientInfo.create({
            fname,
            dob,
            idNumber,
            occupation,
            maritalStatus,
            phoneNumber,
            education,
            sex,
            age,
        });
        //patients address info
        var record = await models.patientAddress({
            houseNo,
            streetName,
            district,
            city,
            province
        });
        // add patients address to info table
        created.address.push(record)
        created.save()
        // send back are response to user
        res.json({status:"ok", id:created._id})
    } catch (e) {
    }
}

module.exports = exports;