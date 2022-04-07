import React from "react";
import "./Category.css";
import National from "./Category_Types/National";
import { Link } from "react-router-dom";
import International from "./Category_Types/International";
import Research from "./Category_Types/Research";
import Private from "./Category_Types/Private";
import Regional from "./Category_Types/Regional";
import makeStyles from '@mui/styles/makeStyles';
const useStyles = makeStyles({
  component: {
    color: '#fff',
    textDecoration: 'none',
  }
});

const Category = () => {
  const classes = useStyles();
  return (
    <div>
      <div className="category" id="category">
        <div className="category_heading">
          Scholarship <span style={{ color: "#db5d17" }}>Available</span>
        </div>
        <div className="category_types">
          <Link to="/national" className={classes.component}>
            <National />
          </Link>
          <Link to="/international" className={classes.component}>
            <International />
          </Link>
          <Link to="/research" className={classes.component}>
            <Research />
          </Link>
          <Link to="/private" className={classes.component}>
            <Private />
          </Link>
          <Link to="/regional" className={classes.component}>
            <Regional />
          </Link>



        </div>
      </div>
    </div>
  );
};

export default Category;
