import { Router } from "express";
import { create, list, read } from "../controllers/product";

const router = Router()

router.post("/product", create)
router.get("/product", list)
router.get("/product/:id", read)

export default router