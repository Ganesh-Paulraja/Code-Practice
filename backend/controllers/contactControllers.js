const contactModel = require("../models/contactModel");
const asyncHandler = require('express-async-handler')

//@des Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await contactModel.find();
  res.status(200).json({contacts})
})

//@des create new contact
//@route POST /api/contacts
//@access public

const createContact = asyncHandler(async (req, res) => {
  console.log(`The request body is:`, req.body);
  const { name, email, phone } = req.body;
  if( !name || !email || !phone ) {
    res.status(400);
    throw new Error('All fields are mandatory !')
  }
  const contact = await contactModel.create({
    name,
    email,
    phone,
  })
  res.status(201).json({contact})
})

//@des get contact
//@route GET /api/contacts/:id
//@access public

const getContact = (req, res) => {
  res.status(200).json({message: `get contact for ${req.params.id}`})
}

//@des update contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = (req, res) => {
  res.status(200).json({message: `update contact for ${req.params.id}`})
}

//@des delete contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = (req, res) => {
  res.status(200).json({message: `delete contact for ${req.params.id}`})
}

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact }