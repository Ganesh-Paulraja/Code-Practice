const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({message: 'Get all contacts'})
});
router.post('/', (req, res) => {
  res.status(200).json({message: 'Create Contact'})
});
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