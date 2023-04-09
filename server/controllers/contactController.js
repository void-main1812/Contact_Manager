// @desc: get all contacts
// @route: GET /api/v1/contacts
// @access: Public
const getContacts = async (req, res) => {
    res.status(200).json({message: 'Get all Contacts'})
};

// @desc: create a contact
// @route: POST /api/v1/contacts
// @access: Public
const createContact = async (req, res) => {
    console.log("The requested body is: ", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400).json({message: 'Please enter all fields'});
        throw new Error('Please enter all fields');
    }
    res.status(201).json({message: 'Create Contacts'})
};

// @desc: get a contact
// @route: GET /api/v1/contacts/:id
// @access: Public
const getContact = async (req, res) => {
    res.status(200).json({message: `Get Contact ${req.params.id}`})
};

// @desc: update a contact
// @route: PUT /api/v1/contacts/:id
// @access: Public
const updateContact = async (req, res) => {
    res.status(200).json({message: `Update Contact ${req.params.id}`})
};

// @desc: delete a contact
// @route: DELETE /api/v1/contacts/:id
// @access: Public
const deleteContact = async (req, res) => {
    res.status(200).json({message: `Delete Contact ${req.params.id}`})
};


// export all functions
module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};