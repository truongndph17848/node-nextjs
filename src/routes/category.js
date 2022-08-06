import { Router } from "express";
import { create, list, read, remove, update } from '../controllers/categoory';

const router = Router()

router.post("/categories", create)
router.get("/categories", list)
router.get("/categories/:id", read);
router.delete("/categories/:id", remove)
router.delete("/categories/:id", remove)
router.put("/categories/:id", update)

export default router