import { Router } from "express";
import { create, list, remove } from "../controllers/categoory";

const router = Router()

router.post("/category", create)
router.get("/category", list)
router.delete("/category/:id", remove)

export default router