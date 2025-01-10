import React from "react";
import aboutImg from "../../assets/img/about-img.png";
import "./About.css";
const About = () => {
  return (
    <section className="about">
      <div className="flex">
        <h3 className="shop">About Our Shop</h3>
        <h2 className="distribution">Coffee distribution</h2>
        <p className="text">
          has a more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
          Many desktop publishing packages and web page editorhas a more-or-less
          normal distribution of letters, as oppos
        </p>
        <button className="read">READ MORE</button>
      </div>
      <div className="pretty">
        <img src={aboutImg} alt="pretty lady" />
      </div>
    </section>
  );
};

export default About;
