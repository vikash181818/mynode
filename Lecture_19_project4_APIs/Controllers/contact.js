import { Contact } from "../Models/Contact.js";






//get all contacts

export const getAllContacts = async (req, res) => {
    const contacts = await Contact.find();
    if (contacts.length === 0) {
        return res.status(400).json({ message: "no contacts found", success: false });
    }
        res.json({ message:"All contact fetch" ,contacts });
}

//create new contact
export const newContact = async (req, res) => {
    const { name, email, phone, type } = req.body;
    if (!name || !email || !phone || !type) {
        return res.status(400).json({ message: "please enter all fields" });
    }
    const saveContact = await Contact.create({ name, email, phone, type, user: req.user});
    res.json({ message: "contact created successfully", success: true });
}


//get contact by id
export const getContactById = async (req, res) => {
    const contact = await Contact.findById(req.params.id);  
    if (!contact) {
        return res.status(400).json({ message: "no contact found", success: false });
    }
    res.json({ message: "contact fetch successfully", contact });
}


//update contact by id
export const updateContactById = async (req, res) => {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!contact) {
        return res.status(400).json({ message: "no contact found", success: false });
    }
    res.json({ message: "contact updated successfully", contact });
}




//delete contact by id
export const deleteContactById = async (req, res) => {
    const contact = await Contact.findByIdAndDelete(req.params.id); 
    if (!contact) {
        return res.status(400).json({ message: "no contact found", success: false });
    }
    res.json({ message: "contact deleted successfully", contact });
}



//get contact by user id
 
export const getContactByUserId = async (req, res) => {
    const contact = await Contact.find({ user: req.params.id }); 
    if (!contact) {
        return res.status(400).json({ message: "no contact found", success: false });
    }
    res.json({ message: "contact fetch successfully", contact });
}