var express = require("express");
var router = express.Router();
var { symptomPage, Sypmtoms, updateSymptoms} = require("../../controllers/patientaDiagnosis/symptoms")
var { SanitizeSymptoms } = require("../../middlewares/formSanitizationMiddleware")
router.route("/")
   .get(symptomPage)
   .post(SanitizeSymptoms,Sypmtoms)
   .put(SanitizeSymptoms, updateSymptoms)

module.exports = router;