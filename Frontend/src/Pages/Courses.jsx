import { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Courses.css';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://backendprototype.onrender.com/courses/getCourses');
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const data = await response.json();
        setCourses(data.courses);
      } catch (error) {
        console.error('Error fetching courses:', error.message);
      }
    };

    fetchCourses();
  }, []);

  const handleCourseClick = (courseId) => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate(`/courses/${courseId}`);
    } else {
      toast.error('Login First to see the course details');
    }
  };

  const goToAdd = () => {
    navigate('/addCourse');
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCourses = courses.filter((course) =>
    course.courseName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Fragment>
      <div className="courses-container">
        <div className="top-right">
          <button className="add-course-button" onClick={goToAdd}>
            Add Course
          </button>
        </div>
        <input
          type="text"
          placeholder="Search for courses"
          className="search-input"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{width:'550px', border:'2px solid black'}}
        />

        <div className="course-cards">
          {filteredCourses.map((course) => (
            <div className="course-card" key={course._id} onClick={() => handleCourseClick(course._id)}>
              <img src={course.image} alt={course.courseName} className="course-image" />
              <div className="course-details">
                <h3 style={{border:'none'}} className="course-name">{course.courseName}</h3>
                <p className="instructor-name">Instructor: {course.instructorName}</p>
                <p className="course-dates">
                  Start Date: {new Date(course.startDate).toLocaleDateString()} - End Date:{' '}
                  {new Date(course.endDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Courses;
