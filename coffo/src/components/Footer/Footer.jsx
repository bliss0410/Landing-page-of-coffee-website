import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="footer">
      <div className="social">
        <i className="fi fi-brands-facebook"></i>
        <i className="fi fi-brands-twitter-alt-circle"></i>
        <i className="fi fi-brands-instagram"></i>
        <i className="fi fi-brands-linkedin"></i>
      </div>
      <div className="icon">
        <i className="fi fi-rr-phone-call"> 081446608</i>
        <i className="fi fi-ss-envelope"></i>
        <p className="demo"> demo@gmail.com</p>
      </div>
      <div className="email">
        <input
          type="text"
          placeholder="your email"
          className="p-2  text-white"
        />
        <i className="fi fi-tr-arrow-square-right "></i>{" "}
      </div>
      <div className="rights">
        <p> 2020 all rights reserved </p>
      </div>
    </section>
  );
};

export default Footer;
