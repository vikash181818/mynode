import express from "express";
import { deleteContactById, getAllContacts, getContactById, getContactByUserId, newContact, updateContactById } from "../Controllers/contact.js";
import { isAuthenticated } from "../Middlewares/auth.js";
const router= express.Router();

//create new contact
// @api dsc -: create new contact
// @api endPoint -: /api/contacts/new
// @api method -: POST




router.post('/new',isAuthenticated,newContact);
//get all contacts

router.get('/all',getAllContacts);

//get contact by id

router.get('/:id',getContactById)

//update contact by id

router.put('/:id',isAuthenticated,updateContactById)

//delete contact by id
router.delete('/:id',  isAuthenticated,deleteContactById)

//get contact by user id

router.get('/userid/:id',getContactByUserId)

export default router;