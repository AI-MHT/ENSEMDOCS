import React from "react";
import { Link } from "react-router-dom";

const Abouthome = ({ imageUrl, altText, title, description }) => {
  const fullImageUrl = imageUrl;

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
              <Link className="read_more" to="/About">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abouthome;
