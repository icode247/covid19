const { check, validationResult } = require('express-validator');

module.exports.SanitizePatients = [

    // Check dob
    check('dob').trim().escape(),
    // Check fullname
    check('fname').trim().escape(),
    // Check province
    check('province').trim().escape(),
    // Check idNumber
    check('idNumber').trim().escape(),
    // Check occupation
    check('occupation').trim().escape(),
    // Check maritalStatus
    check('maritalStatus').trim().escape(),
    // Check phoneNumber
    check('phoneNumber').trim().escape(),
    // Check streetName
    check('streetName').trim().escape(),
    // Check education
    check('education').trim().escape(),
    // Check district
    check('district').trim().escape(),
    // Check houseNo
    check('houseNo').trim().escape(),
    // Check city
    check('city').trim().escape(),
    // Check sex
    check('sex').trim().escape(),
];

module.exports.SanitizeTravelHistory = [
    check('date').trim().escape(),
    check('to').trim().escape(),
    check('country').trim().escape(),
    check('city').trim().escape(),
];

module.exports.SanitizeSymptoms = [
    check('Fever').trim().escape(),
    check('Diarrhea').trim().escape(),
    check('Runny_nose').trim().escape(),
    check('Vomiting').trim().escape(),
    check('Muscle_pain').trim().escape(),
    check('shortness_of_breath').trim().escape(),
    check('Nausea').trim().escape(),
    check('Sore_throat').trim().escape(),
    check('Headeche').trim().escape(),
    check('Joint_pain').trim().escape(),
    check('Cough ').trim().escape()
]
