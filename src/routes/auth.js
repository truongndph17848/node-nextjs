import { Router } from "express";
import {login, register} from '../controllers/auth';
import { listUser, removeUser, useById } from "../controllers/user";

const router = Router();

router.post('/register', register)
router.post('/login', login)
router.get("/users", listUser);
router.get("/users/:id", useById);
router.delete("/users/:id", removeUser);



export default router;