import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./CourseDetail.css";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`http://localhost:5500/courses/getCourse/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch course details');
        }
        const data = await response.json();
        setCourse(data.course);
      } catch (error) {
        console.error('Error fetching course details:', error.message);
      }
    };

    fetchCourse();
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="course-details-container">
      <div className="course-image">
        <img src={course.image} alt={course.courseName} />
      </div>
      <div className="course-info">
        <div className="info-detail">
          <h2>{course.courseName}</h2>
          <p>Instructor: {course.instructorName}</p>
          <p>Description: {course.description}</p>
          <p>Category: {course.category}</p>
          <p>Start Date: {new Date(course.startDate).toLocaleDateString()}</p>
          <p>End Date: {new Date(course.endDate).toLocaleDateString()}</p>
        </div>
        <h3>Course Content:</h3>
        <ul>
          {course.content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetails;
