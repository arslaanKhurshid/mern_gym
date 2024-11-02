import React from "react";
import { Link } from "react-scroll"; 
const Hero = () => {
  return (
    <section className="hero">
      <div className="content">
        <div className="title">
          <h1>LET'S</h1>
          <h1>GET</h1>
          <h1>MOVING</h1>
        </div>
        <div className="sub-title">
          <p>Your Journey to Fitness Starts Here</p>
          <p>Unleash Your Potential</p>
        </div>
        <div className="buttons">
        <Link to="workout_sessions" smooth={true} duration={500}>
            <button>Start Your Journey</button>
        </Link>
        <Link to="prices_list" smooth={true} duration={500}>
        <button>Discover Your Plan</button>
        </Link>
          

        </div>
      </div>
    </section>
  );
};

export default Hero;
