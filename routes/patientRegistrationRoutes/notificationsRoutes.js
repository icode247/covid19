const express = require("express");
const router = express.Router();
const notificationController = require("../../controllers/patientRegistration/notificationConrollers")

router.route('/')
   .get(notificationController.NotifyPage)

router.route('/create')
   .post(notificationController.createNotification)

router.route('/:id')
  .get(notificationController.getOneNotification)

module.exports = router;