import { Router } from "express";
import { create, list, read, remove } from "../controllers/categoory";

const router = Router()

router.post("/category", create)
router.get("/category", list)
router.get("/category/:id", read);
router.delete("/category/:id", remove)

export default router