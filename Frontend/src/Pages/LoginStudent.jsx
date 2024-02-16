import { Fragment, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LoginStudent.css';

const LoginStudent = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
  
    try {
      const response = await fetch('http://localhost:5500/login/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      
      if (response.ok) {
        const data = await response.json();
        // Save the token to localStorage
        localStorage.setItem('token', data.token);
        toast.success('Login successful!');
        console.log("login")
        // Perform any additional actions upon successful login
      } else {
        toast.error('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };
  
  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
  
    try {
      const response = await fetch('http://localhost:5500/login/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });
      
      if (response.ok) {
        const data = await response.json();
        // Save the token to localStorage
        localStorage.setItem('token', data.token);
        toast.success('Registration successful! Please login to continue.');
        console.log("register")
        // You might want to automatically switch to the login form after successful registration
        setIsLogin(true);
      } else {
        toast.error('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };
  

  return (
    <Fragment>
      <div className="login-container">
        <div className="form-container">
          <h2>{isLogin ? 'Student Login' : 'Student Register'}</h2>
          <form onSubmit={isLogin ? handleLogin : handleRegister}>
            {isLogin ? (
              <Fragment>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" placeholder="Enter your password" required />
                </div>
                <button type="submit" className="button-login" style={{padding:'10px 30px 10px 30px', borderRadius:'10px', border:"none", marginLeft:'110px', cursor:'pointer'}}>Login</button>
              </Fragment>
            ) : (
              <Fragment>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" id="username" name="username" placeholder="Enter your username" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" placeholder="Enter your password" required />
                </div>
                <button type="submit" className="button-login" style={{padding:'10px 30px 10px 30px', borderRadius:'10px', border:"none", marginLeft:'110px', cursor:'pointer'}}>Register</button>
              </Fragment>
            )} 
          </form>
          <div className="toggle-form">
            {isLogin ? (
              <p>
                Do not have an account? <button onClick={toggleForm}>Register</button>
              </p>
            ) : (
              <p>
                Already have an account? <button onClick={toggleForm}>Login</button>
              </p>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginStudent;
