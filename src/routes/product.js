import { Router } from "express";
import { create, list } from "../controllers/product";

const router = Router()

router.post("/product", create)
router.get("/product", list)

export default router