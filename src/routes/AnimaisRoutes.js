import express from "express";
import { getAllAnimais,getAnimalById} from '../controllers/AnimaisController.js';

const router = express.Router();

router.get("/", getAllAnimais);
router.get("/:id", getAnimalById);

export default router;