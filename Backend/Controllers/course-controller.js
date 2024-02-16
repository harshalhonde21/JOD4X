import Course from "../Models/Courses.js";


export const addCourse = async (req, res, next) => {
  try {
    const { courseName, instructorName, image, description, category, startDate, endDate, content } = req.body;
    const course = new Course({ courseName, instructorName, image, description, category, startDate, endDate, content });
    await course.save();
    res.status(201).json({ message: "Course added successfully", course });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Edit an existing course
export const editCourse = async (req, res, next) => {
  try {
    const courseId = req.params.id;
    const { courseName, instructorName, image, description, category, startDate, endDate, content } = req.body;
    const updatedCourse = await Course.findByIdAndUpdate(courseId, { courseName, instructorName,image, description, category, startDate, endDate, content }, { new: true });
    if (!updatedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json({ message: "Course updated successfully", course: updatedCourse });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete a course
export const deleteCourse = async (req, res, next) => {
  try {
    const courseId = req.params.id;
    const deletedCourse = await Course.findByIdAndDelete(courseId);
    if (!deletedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json({ message: "Course deleted successfully", course: deletedCourse });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all courses
export const getAllCourses = async (req, res, next) => {
  try {
    const courses = await Course.find();
    res.status(200).json({ courses });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get a single course by ID
export const getCourseById = async (req, res, next) => {
  try {
    const courseId = req.params.id;
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json({ course });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
