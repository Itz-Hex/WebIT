const express = require("express");
const indexController = require("../controllers/index.controller");
const router = express.Router();

router.get("/", indexController.getHome);
router.get("/home", indexController.getHome);
router.get("/about", indexController.getAbout);
router.get("/contact", indexController.getContact);

module.exports = router;
