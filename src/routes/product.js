import { Router } from "express";
import { create } from "../controllers/product";

const router = Router()

router.post("/product", create)

export default router