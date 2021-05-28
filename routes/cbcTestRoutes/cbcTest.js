var express = require("express");
var router = express.Router();
var { cbcTestPage, cbcTest ,getPatient} = require("../../controllers/patientaDiagnosis/cbcTest")

router.route("/test")
   .get(cbcTestPage)
   .post(cbcTest)


module.exports = router;