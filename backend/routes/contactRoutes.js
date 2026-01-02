const express = require("express");
const Contact = require("../models/Contact");
const controller = require('../controllers/contactController');
const router = express.Router();

router.post("/", controller.create
//    async (req, res) => {
//   try {
//     const contact = await Contact.create(req.body);
//     res.status(201).json(contact);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// }
);


router.get("/",controller.getContact
//    async (req, res) => {
//   const contacts = await Contact.find().sort({ createdAt: -1 });
//   res.json(contacts);
// }
);
router.delete("/:id",controller.deleteContact
//    async (req, res) => {
//   await Contact.findByIdAndDelete(req.params.id);
//   res.json({ message: "Contact deleted" });
// }
);

module.exports = router;