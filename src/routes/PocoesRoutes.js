import express from "express";

import { getAllPocoes,getPocaoById} from '../controllers/PocoesController.js'

const router = express.Router();

router.get("/", getAllPocoes);
router.get("/:id", getPocaoById);

export default router;