import React from "react";

const WorkoutSessions = () => {
  return (
    <section id="workout_sessions" className="workout_session">
      <div className="wrapper">
        <h1>ARNOLD GYM SRINAGAR</h1>
        <p>
          Located at Furniture Market, Babbar Shah, opposite the Marriage Hall in
          Srinagar, Arnold Gym offers top-tier facilities with the latest equipment
          for cross-fit, weight lifting, cardio, and prep training.
        </p>
        <img src="/2.jpeg" alt="Arnold Gym" />
      </div>

      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Arnold Gym is renowned for its tailored fitness programs, including
          personalized training with Waseem, a champion trainer and the title-holder
          of Mr. Kashmir. Here, clients get support in achieving their fitness
          goals through structured sessions and expert guidance.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Cross-Fit Training</h4>
            <p>
              High-intensity workouts designed to improve strength and endurance.
              Our facilities include specialized equipment tailored to maximize
              results safely and effectively.
            </p>
          </div>
          <div>
            <h4>Weight Lifting</h4>
            <p>
              A variety of free weights and machines are available, enabling members
              to work on muscle building and toning under the guidance of experienced
              trainers.
            </p>
          </div>
          <div>
            <h4>Cardio Section</h4>
            <p>
              The dedicated cardio section, located on the second floor, provides
              options such as treadmills, ellipticals, and stationary bikes to help
              members stay fit and improve cardiovascular health.
            </p>
          </div>
          <div>
            <h4>Personalized Prep Training</h4>
            <p>
              Specialized programs are available for members preparing for competitions
              or specific fitness goals, supported by our expert trainers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
