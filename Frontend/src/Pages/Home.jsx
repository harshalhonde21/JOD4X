import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const done = () => {
    navigate("/courses");
  };
  return (
    <Fragment>
      <div className="home-container">
        <div className="content">
          <div className="text">
            <h1>Online Learning</h1>
            <p>
              Welcome to our online Learning platform! Explore diverse courses, expert instructors, and flexible learning options. Start your educational journey today!
            </p>
            <button className="explore-button" onClick={done}>
              Explore
            </button>
          </div>
        </div>
        <div className="image">
          <img src="/homeimg.png" alt="Background" />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
