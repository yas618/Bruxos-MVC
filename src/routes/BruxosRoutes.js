import express from 'express';
import { getAllBruxos,getBruxoById } from '../controllers/BruxosController.js';

const router  = express.Router();

router.get('/', getAllBruxos); 
router.get('/bruxos/:id', getBruxoById);

export default router;