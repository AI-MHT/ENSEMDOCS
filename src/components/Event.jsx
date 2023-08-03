import React from "react";

const Event = ({ active, imageUrl, altText, title, subtitle,description }) => {
  return (
    <div className={`carousel-item ${active ? "active" : ""}`}>
      <div className="container-fluid">
        <div className="carousel-caption">
          <div className="row">
            <div className="col-md-12 col-lg-7">
              <div className="text-bg">
                <span>{title}</span>
                <h1>{subtitle}</h1>
                <p>{description}</p>
              </div>
            </div>
            <div className="col-md-12 col-lg-5">
              <div className="text_img">
                <figure>
                  <img src={imageUrl} alt={altText} />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;