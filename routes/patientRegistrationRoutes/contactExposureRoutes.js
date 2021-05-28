const express = require("express");
const router = express.Router();
const clinicalControllers = require("../../controllers/patientRegistration/contactExposureControllers")
const { SanitizeTravelHistory } = require("../../middlewares/formSanitizationMiddleware")
router.route('/')
   .get(clinicalControllers.clinicalPage)

router.route('/create')
   .post(SanitizeTravelHistory,clinicalControllers.createClinicalInfo)

// router.route('/:id')
//   .get(notificationController.getOneNotification)

module.exports = router;