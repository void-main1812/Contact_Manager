// imports
const asyncHandler = require('express-async-handler');
const Contact = require('../Schema/contactModel');

// @desc: get all contacts
// @route: GET /api/v1/contacts
// @access: Public
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts)
});

// @desc: create a contact
// @route: POST /api/v1/contacts
// @access: Public
const createContact = asyncHandler(async (req, res) => {
    console.log("The requested body is: ", req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error('Please enter all fields');
    }
    // create a new contact
    const contact = await Contact.create({
        name,
        email,
        phone
    });

    res.status(201).json(contact)
});

// @desc: get a contact
// @route: GET /api/v1/contacts/:id
// @access: Public
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error('Contact not found');
    }
    res.status(200).json(contact)
});

// @desc: update a contact
// @route: PUT /api/v1/contacts/:id
// @access: Public
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error('Contact not found');
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.status(200).json(updatedContact)
});

// @desc: delete a contact
// @route: DELETE /api/v1/contacts/:id
// @access: Public
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error('Contact not found');
    }
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json(contact)
});


// export all functions
module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};