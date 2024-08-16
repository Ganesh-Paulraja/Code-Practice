const express = require('express');
const router = express.Router()
const { getContact, createContact, getContacts, updateContact } = require('../controllers/contactControllers');
const validateToken = require('../midleware/validateTokenHandler');

router.use(validateToken);
router.route('/').get(getContacts).post(createContact);
router.route('/:id').get(getContact).put(updateContact).delete(updateContact);

module.exports = router; 