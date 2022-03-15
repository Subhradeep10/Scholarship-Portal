import React from "react";
import Home_Items from "../../Images/Home_Items.png";
import "./Home.css";
import About from "../About/About";
import Category from "../Category/Category";

const Home = () => {
  return (
    <div>
      <img src={Home_Items} alt="" srcset="" className="Home" id="Home" />
      <About />
      <Category />
    </div>
  );
};

export default Home;
