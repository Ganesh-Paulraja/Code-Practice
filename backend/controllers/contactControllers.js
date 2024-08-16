const contactModel = require("../models/contactModel");
const asyncHandler = require('express-async-handler')

//@des Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await contactModel.find();
  if (!contacts) {
    res.status(404);
    throw new Error("Contacts not found");
  }
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

const getContact = asyncHandler(async (req, res) => {
  const contact = await contactModel.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contacts not found");
  }
  res.status(200).json(contact);
})

//@des update contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler(async (req, res) => {
  const contact = await contactModel.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contacts not found");
  }
  const updateContact = await contactModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true}
  )
  res.status(200).json(updateContact)
})

//@des delete contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await contactModel.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contacts not found");
  }
  await contact.remove();
  res.status(200).json(contact)
})

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact }