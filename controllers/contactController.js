const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc Create new contact
//@route POST /api/contacts
//@access Public
const createContact = asyncHandler(async (req, res) => {
    console.log('The request body is: ', req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error('Please provide name, email and phone');
    }
    res.status(201).json({ 'message': 'Create contact' });
});

//@desc Get a contact
//@route GET /api/contacts/:id
//@access Public
const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ 'message': `Get contact for ${req.params.id}` });
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ 'message': `Update contact for ${req.params.id}` });
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ 'message': `Delete contact for ${req.params.id}` });
});

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };