import express from 'express';
import { getAllBruxos,getBruxoById } from '../controllers/BruxosController.js';

const router  = express.Router();

router.get('/', getAllBruxos); 
router.get('/:id', getBruxoById);

export default router;