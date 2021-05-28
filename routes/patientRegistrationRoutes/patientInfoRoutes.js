const express = require("express");
const router = express.Router();
const patientsController = require("../../controllers/patientRegistration/patientInfoControllers")
var { SanitizePatients } = require("../../middlewares/formSanitizationMiddleware");

router.route('/')
   .get(patientsController.patientPage)
router.route('/all')
   .get(patientsController.patientAll)
   
router.route('/create')
   .post(SanitizePatients,patientsController.createInfo)

// router.route('/:id')
//   .get(notificationController.getOneNotification)

// get all registerd patients.
router.route("/patients")
   .get(patientsController.getUser)

module.exports = router;