import express from 'express';
const router = express.Router();

// import controller instance
import { DisplayAddPage, DisplayContactListPage, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../Controllers/contact-list';

/********************************** CONTACT-LIST ROUTES ****************************/

/* GET contact-list page. */
router.get('/contact-list', DisplayContactListPage);

/* Displays the Add Page */
router.get('/add', DisplayAddPage);

/* Process the Add Request */
router.post('/add', ProcessAddPage);

/* Display the Edit Page with Data */
router.get('/edit/:id', DisplayEditPage);

/* Process the Edit request */
router.post('/edit/:id', ProcessEditPage);

/* Process the delete request */
router.get('/delete/:id', ProcessDeletePage);

/*********************************************************************/
export default router;