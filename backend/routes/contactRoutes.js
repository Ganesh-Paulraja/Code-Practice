const express = require('express');
const router = express.Router()
const { getContact, createContact } = require('../controllers/contactControllers')

router.get('/', getContact);
router.post('/', createContact);
router.get('/:id', (req, res) => {
  res.status(200).json({message: `get contact for ${req.params.id}`})
});
router.put('/:id', (req, res) => {
  res.status(200).json({message: `update contact for ${req.params.id}`})
}); 
router.delete('/:id', (req, res) => {
  res.status(200).json({message: `delete contact for ${req.params.id}`})
}); 
module.exports = router; 