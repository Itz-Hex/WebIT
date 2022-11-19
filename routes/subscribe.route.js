const express = require("express");
const subscribeController = require("../controllers/subscribe.controller");
const router = express.Router();

router.get("/subscribe", subscribeController.getSubscribe);
router.post("/subscribe", subscribeController.postSubscribe);

module.exports = router;
