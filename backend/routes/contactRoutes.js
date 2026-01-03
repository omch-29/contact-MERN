const express = require("express");
const Contact = require("../models/Contact");
const controller = require('../controllers/contactController');
const router = express.Router();

router.post("/", controller.create);


router.get("/",controller.getContact);
router.delete("/:id",controller.deleteContact);

module.exports = router;