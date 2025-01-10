import React from "react";
import assets from "../../assets/img/assets";
import "./Offer.css";
const Offer = () => {
  return (
    <section className="offer">
      <h3 className="our">OUR COFFEE OFFER</h3>
      <div className="flexbox">
        <div className="cad">
          <img src={assets.offer1} alt="" />
          <h4 className="type">Types of Coffee</h4>
          <p className="look">Looking at its layout. The point of</p>
          <button className="moree">Read more</button>
        </div>
        <div className="cad">
          <img src={assets.offer2} alt="" />
          <h4 className="type">Bean Varieties</h4>
          <p className="look">Looking at its layout. The point of</p>
          <button className="moree">Read more</button>
        </div>
        <div className="cad">
          <img src={assets.offer3} alt="" />
          <h4 className="type"> Coffee & Pastry</h4>
          <p className="look"> Looking at its layout. The point of</p>
          <button className="moree">Read more</button>
        </div>
        <div className="cad">
          <img src={assets.offer4} alt="" />
          <h4 className="type">Coffee to go</h4>
          <p className="look">Looking at its layout. The point of</p>
          <button className="moree">Read more</button>
        </div>
      </div>
    </section>
  );
};

export default Offer;
