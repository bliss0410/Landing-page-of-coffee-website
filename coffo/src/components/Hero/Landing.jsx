import React, { useState } from "react";
import "./Landing.css";
const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <section className="landing h-screen">
      <div className="container">
        <header>
          <h1 className="logo ">Coffo</h1>
          {/* Mobile Nav bar */}
          {isMenuOpen && (
            <nav className={`nav ${isMenuOpen ? "block" : "hidden"} `}>
              <ul className="nav_list">
                <li className="nav_item active">Home</li>
                <li className="nav_item">About</li>
                <li className="nav_item">Coffees</li>
                <li className="nav_item">Shop</li>
                <li className="nav_item">Blog</li>
                <li className="nav_item">Contact</li>
              </ul>
            </nav>
          )}
          <i
            className="fi fi-br-menu-burger  text-[3rem] font-semibold pt-5 md:hidden "
            onClick={toggleMenu}
          ></i>
          {/* desktop nav bar */}
          <nav className="nav hidden md:block">
            <ul className="nav_list">
              <li className="nav_item active">Home</li>
              <li className="nav_item">About</li>
              <li className="nav_item">Coffees</li>
              <li className="nav_item">Shop</li>
              <li className="nav_item">Blog</li>
              <li className="nav_item">Contact</li>
            </ul>
          </nav>
        </header>
        <div className="hero">
          <h2 className="coffee">Coffee Shop</h2>
          <p className="more">
            more-or-less distribution of letters , as opposed to using
          </p>
          <div className="space-x-4">
            <button className="button">About Us</button>
            <button className="button1"> Call now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
