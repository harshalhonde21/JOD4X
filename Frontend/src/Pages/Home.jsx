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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
              voluptate eaque aspernatur et delectus ducimus.
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
