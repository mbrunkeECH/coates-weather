import React from "react";
import "./stat.css";

const Stat = ({ image, text, color, bgColor }) => {
  return (
    <div className="stat" style={{ "--color": color, "--bg": bgColor }}>
      {image && <img src={image} alt="statistics icon" />}
      <p>{text}</p>
    </div>
  );
};

export default Stat;
