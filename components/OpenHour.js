import React from "react";

const OpenHour = ({ cafe }) => {
  return (
    <section className="open section">
      <div className="open__container">
        <div className="open__images">
          <img src="/img/opening2.jpg" alt="" />
          <div className="open__desc">
            <h3>Reserve A Table</h3>
            <h1>Open Hours</h1>
            <div className="open__hour">
              {cafe.openHours.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
            <a href="#" className="button button--book">
              Discover More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenHour;
