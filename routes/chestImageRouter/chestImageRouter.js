var express = require("express");
var router = express.Router();
var { chestPage, chestImage} = require("../../controllers/patientaDiagnosis/chestImage")

router.route("/")
   .get(chestPage)

module.exports = router;