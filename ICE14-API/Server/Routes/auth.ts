import express from 'express';
const router = express.Router();

// import controller instance
import { ProcessLoginPage, ProcessLogoutPage, ProcessRegisterPage } from '../Controllers/auth';

/******************************************* AUTHENTICATION ROUTES **********************/

/* Process the Login Request */
router.post('/login', ProcessLoginPage);

/* Process the Register request */
router.post('/register', ProcessRegisterPage);
  
/* Process the logout request */
router.get('/logout', ProcessLogoutPage);

export default router;