import React from "react";
import "./Category.css";
import National from "./Category_Types/National";
import International from "./Category_Types/International";
import Regional from "./Category_Types/Regional";
import Private from "./Category_Types/Private";
import Research from "./Category_Types/Research";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <div className="category" id="category">
        <div className="category_heading">
          Category Of Each <span style={{ color: "#db5d17" }}>Scholarship</span>
        </div>
        <div className="category_types">
          <Link to="/national">
            <National />
          </Link>
          <Link to="/international">
            <International />
          </Link>
          <Link to="/regional">
            <Regional />
          </Link>
          <Link to="/private">
            <Private />
          </Link>
          <Link to="/research">
            <Research />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
