import express from "express";
import { addCourse, editCourse, deleteCourse, getAllCourses, getCourseById } from "../Controllers/course-controller.js";

const routers = express.Router();

// Get all courses
routers.get("/getCourses", getAllCourses);

// Add a new course
routers.post("/addCourse", addCourse);

// Get a single course by ID
routers.get("/getCourse/:id", getCourseById);

// Edit an existing course
routers.put("/editCourse/:id", editCourse);

// Delete a course
routers.delete("/deleteCourse/:id", deleteCourse);

export default routers;
