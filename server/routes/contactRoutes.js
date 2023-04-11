const express = require('express');
const router = express.Router();
const {getContact, createContact, getContacts, updateContact, deleteContact} = require('../controllers/contactController');

// Routes
router.route('/').get(getContacts).post(createContact);

router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);

// Export
module.exports = router;
