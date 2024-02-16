import { Fragment } from "react";
import Navbar from "./Components/Navbar"; 
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Contact from "./Pages/Contact";
import LoginStudent from "./Pages/LoginStudent";
import AddCourse from "./Pages/AddCourse";
import TeacherCourse from "./Components/TeacherCourse";
import CourseDetail from "./Components/CourseDetail"

import { ToastContainer} from 'react-toastify';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/loginStudent" element={<LoginStudent />} />
        <Route path="/addCourse" element={<AddCourse />} />
        <Route path="/addCourses" element={<TeacherCourse />} />
        <Route path="/courses/:id" element={<CourseDetail />} /> 
      </Routes>
      <ToastContainer />
    </Fragment>
  );
};

export default App;
