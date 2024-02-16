import { Fragment, useState } from 'react';
import {useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddCourse.css';

const AddCourse = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5500/teacher/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error('Failed to sign up teacher');
      }

      const data = await response.json();
      console.log('Teacher sign up successful:', data);
      toast.success('Teacher sign up successful!');
      // Handle successful sign up here
navigate("/addCourses")
    } catch (error) {
      console.error('Error signing up teacher:', error);
      toast.error('Error signing up teacher. Please try again.');
      // Handle errors here
    }
  };

  return (
    <Fragment>
      <div className="add-course-container">
        <h2>Auth For Teacher</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter teacher's email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="Enter teacher's password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type='submit' className='button-course'>Sign Up Teacher</button>
        </form>
      </div>
    </Fragment>
  );
};

export default AddCourse;
