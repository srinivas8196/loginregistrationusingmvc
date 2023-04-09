var express = require("express")
var userController = require("../controller/usercontroller")
const router = express.Router();

router.post("/user/login",userController.loginUserController)
router.post("/user/register",userController.registerUserController)

module.exports = router;
