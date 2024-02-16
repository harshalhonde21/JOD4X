import express from "express";
import { getMyUsers, login, signup } from "../Controllers/user-controller.js";

const router = express.Router();

router.get("/", getMyUsers); 
router.post("/signup", signup);
router.post("/login", login); 

export default router;