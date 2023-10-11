import React from "react";
import { Link } from "react-router-dom";

const Abouthome = ({ imageUrl, altText, title, description }) => {
  const fullImageUrl = process.env.PUBLIC_URL + imageUrl;

  return (
    <div className="about">
      <div className="container">
        <div className="row d_flex">
          <div className="col-md-12 col-lg-5">
            <div className="about_img">
              <figure><img src={fullImageUrl} alt={altText} /></figure>
            </div>
          </div>
          <div className="col-md-12 col-lg-7">
            <div className="titlepage">
              <h2> <span className="yellow">{title}</span><br />Welcome TO ENSEMDOCS</h2>
              <p>{description}</p>
<<<<<<< HEAD
              <Link className="read_more" to="/About">Read More</Link>
=======
              <Link className="read_more" to="/about">Read More</Link>
>>>>>>> 794b57bd78aa3be2749f77c5fc715e9d31c0c8ea
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abouthome;
