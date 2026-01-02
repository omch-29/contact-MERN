const express = require("express");
const Contact = require("../models/Contact");



async function create(req, res){
try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
async function getContact(req, res){
    const contacts = await Contact.find().sort({ createdAt: -1 });
      res.json(contacts);
}

async function deleteContact(req, res){
    await Contact.findByIdAndDelete(req.params.id);
      res.json({ message: "Contact deleted" });
}

module.exports = {
    create,
    getContact,
    deleteContact,
}