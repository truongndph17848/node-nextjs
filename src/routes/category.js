import { Router } from "express";
import { create } from "../controllers/categoory";

const router = Router()

router.post("/category", create)

export default router