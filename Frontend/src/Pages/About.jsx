import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Our Course</h2>
      <div className="about-content">
        <p>Welcome to our course! This course is designed to...</p>
        <p>Our course covers topics such as:</p>
        <ul>
          <li>Our teachers are highly experts</li>
          <li>We give you best content</li>
          <li>The Content are very flexible</li>
          {/* Add more topics */}
        </ul>
        <p>Our instructors are highly experienced and passionate about teaching.</p>
      </div>
    </div>
  );
};

export default About;
