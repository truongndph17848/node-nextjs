import { Router } from "express";
import { create, list, remove, update } from "../controllers/categoory";

const router = Router()

router.post("/category", create)
router.get("/category", list)
router.delete("/category/:id", remove)
router.delete("/category/:id", remove)
router.put("/category/:id", update)

export default router