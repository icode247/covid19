const express = require("express");
const router = express.Router()
var { Login, LoginPage, Logout } = require("../../controllers/authenticateController/authenticatecontrollers")
router.route('/signin')
  .post(Login)
  .get(LoginPage)
  .delete(Logout)

module.exports = router