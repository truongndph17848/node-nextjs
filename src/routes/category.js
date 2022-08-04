import { Router } from "express";
import { create, list } from "../controllers/categoory";

const router = Router()

router.post("/category", create)
router.get("/category", list)

export default router