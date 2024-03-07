import React from "react";
import "./Hero.css";

function Hero() {
  const containerStyle = {
    backgroundImage: "url(images/background.png)", // Replace with your image path
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="dr-content">
        <h1>Meet the Best Hospital</h1>
        <p>We know how large objects will act, but things on a small scale.</p>
        <div className="dr-btn">
          <button className="b1">Get Quote Now</button>
          <button className="b2">Learn More</button>
        </div>
      </div>
      <div className="dr-form">
        <div className="form-title">
          <h1>Book Appointment</h1>
        </div>

        <div className="card-item">
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="" placeholder="Full Name*" />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" placeholder="example@gmail.com  " />
          </div>
          <div className="form-control">
            <label>Department</label>
            <select name="" id="">
              <option value="">1</option>
              <option value="">2</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="time">Time</label>
            <input type="time" name="time" id="" />
          </div>
          </div>

          <div className="form-btn">
            <button>Book Appointment</button>
          </div>
      
      </div>
    </div>
  );
}

export default Hero;
