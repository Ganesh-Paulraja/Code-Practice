//@des Get all contacts
//@route GET /api/contacts
//@access public

const getContact = (req, res) => {
  res.status(200).json({message: 'Get all contacts'})
}

//@des create new contact
//@route POST /api/contacts
//@access public

const createContact = (req, res) => {
  res.status(201).json({message: 'Create Contact'})
}

module.exports = { getContact, createContact }