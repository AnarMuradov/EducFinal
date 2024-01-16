import React from "react";
import "./style.scss";
const TopCourses = () => {
  return (
    <section className="topCourses">
      <div className="topCourses__container">
        <div className="topCourses__container__title">
          <h1>We Rank the Best Courses on the Web</h1>
          <p>
            In the history of modern astronomy, there is probably no one greater
            leap forward than the building and launch of the space telescope.
          </p>
          <form action="">
            <input placeholder="Search Courses" type="text" />
            <button>Search</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TopCourses;
