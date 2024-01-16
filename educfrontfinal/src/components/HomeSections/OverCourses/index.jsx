import React from "react";
import './style.scss'
const OverCourse = () => {
  return (
    <section className="overCourse">
      <div className="overCourse__container">
        <div className="overCourse__container__img">
          <img
            src="https://preview.colorlib.com/theme/educature/img/about.jpg"
            alt=""
          />
        </div>
        <div className="overCourse__container__content">
          <h2>Over 2500 Courses from 5 Platform</h2>
          <p>
            There is a moment in the life of any aspiring astronomer that it is
            time to buy that first telescope. It’s exciting to think about
            setting up your own viewing station. In the life of any aspiring
            astronomer that it is time to buy that first telescope. It’s
            exciting to think about setting up your own viewing station.
          </p>
          <button>Explore Courses</button>
        </div>
      </div>
    </section>
  );
};

export default OverCourse;
