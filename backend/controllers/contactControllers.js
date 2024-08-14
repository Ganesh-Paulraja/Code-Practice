//@des Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = (req, res) => {
  res.status(200).json({message: 'Get all contacts'})
}

//@des create new contact
//@route POST /api/contacts
//@access public

const createContact = (req, res) => {
  console.log(`The request body is:`, req.body);
  const { name, email, phone } = req.body;
  if( !name || !email || !phone ) {
    res.status(400);
    throw new Error('All fields are mandatory !')
  }
  res.status(201).json({message: 'Create Contact'})
}

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