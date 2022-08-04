import { Router } from "express";
import { create, list, read, remove } from "../controllers/product";

const router = Router()

router.post("/product", create)
router.get("/product", list)
router.get("/product/:id", read)
router.delete("/product/:id", remove)
export default router