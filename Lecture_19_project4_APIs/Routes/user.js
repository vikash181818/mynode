import express from 'express';
import { register,login } from '../Controllers/user.js';



const router= express.Router();



//user register
// @api dsc -: user registration
// @api endPoint -: /api/users/register
// @api method -: POST

router.post('/register',register);

//user login
// @api dsc -: user login
// @api endPoint -: /api/users/login
// @api method -: POST

router.post('/login',login);


export default router;