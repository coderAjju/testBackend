import express from 'express'
import { fromSubmit } from '../controllers/form.controller.js';
const router = express.Router();

router.get('/submit',fromSubmit);

export default router;