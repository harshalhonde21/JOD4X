import express from "express";
import { getTeachers, loginTeacher } from "../Controllers/teacher-controller.js";

const routerss = express.Router();

// Route to fetch all teachers
routerss.get("/getTeacher", getTeachers);

// Route for teacher login
routerss.post("/login", loginTeacher);

export default routerss;
