import express from 'express';
import { login, registerUser } from '../Controllers/user.js';

const router= express.Router();

//register route
//@api - /api/user/register
router.post('/register',registerUser)


//login route
//@api - /api/user/login

router.post('/login',login)



export default router;