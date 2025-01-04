import {Router} from 'express' ;
import { createContent, deleteContent, getContent, updateContent } from '../Controllers/Content.js';
import { auth } from '../MIddlewares/Auth.js';
import { searchContent } from '../Controllers/User.js';


const router = Router() ;


router.post('/create', auth, createContent )
router.get('/getContent/:_id', auth, getContent)
router.post('/deleteContent/:_id', auth, deleteContent)
router.post('/updateContent/:_id', auth, updateContent)
router.post('/search', auth, searchContent)




export default router ; 