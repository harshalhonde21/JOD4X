import Teacher from "../Models/Teacher.js";
import jwt from "jsonwebtoken";
import config from "../config.js";

export const getTeachers = async (req, res, next) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json({ teachers });
  } catch (error) {
    console.error("Error fetching teachers:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const loginTeacher = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const teacher = await Teacher.findOne({ email });

    if (!teacher || teacher.password !== password) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const token = jwt.sign({ _id: teacher._id }, config.jwtSecret);
    res.status(200).json({ token, teacher }); 

  } catch (error) {
    console.error("Error logging in teacher:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
