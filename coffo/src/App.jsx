import "./App.css";
import Landing from "./components/Hero/Landing";
import About from "./components/About/About";
import Offer from "./components/Offer/Offer";
import Footer from "./components/Footer/Footer";
import React, { useEffect, useRef } from "react";

const App = () => {
  // const name = useRef();
  // useEffect(() => {
  //   name.current.value = "precious";
  //   name.current.isMarried = false;
  //   name.current.age = 6;
  //   console.log(name);
  // }, []);
  return (
    <>
      <Landing />
      <About />
      <Offer />
      <Footer />

      {/* <form className="m-4" action="/">
        <label>
          username
          <input ref={name} className="border border-purple-600" type="text" />
          <button className="block p-2 outline outline-purple-600 rounded-sm">
            login
          </button>
        </label>
      </form> */}
    </>
  );
};

// MERN STACK
//Mongodb, expressjs, react, nodejs

//mean stack
//mongodb, express, angular, node.js

//crud
//create read update delete
//get-read
//post-create
//patch/put-update
//delete-delete

// http status codes
//100-599
//100-199
//200-299//success
//...
//400 bad request
export default App;
