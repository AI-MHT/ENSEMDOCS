import React from 'react';
import '../assets/css/ourteam.css';
import joe2024 from "../assets/images/joe2024.jpg"

const Ourteam = () => {
  return (
    <div className="container text-center team-container">
      <h2>Our Team</h2>
      <hr />
      <div className="row justify-content-center">
        <div className="col-md-3 col-sm-6">
          <div className="our-team">
            <div className="pic">
              <img src={joe2024} alt="Williamson" />
            </div>
            <h3 className="title">Aiman MOUHAT</h3>
            <span className="post">Owner</span>
            <ul className="social">
              <li><a href="#" className="fa fa-facebook"></a></li>
              <li><a href="#" className="fa fa-twitter"></a></li>
              <li><a href="#" className="fa fa-google-plus"></a></li>
              <li><a href="#" className="fa fa-linkedin"></a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="our-team">
            <div className="pic">
              <img src={joe2024} alt="Williamson" />
            </div>
            <h3 className="title">Aiman MOUHAT</h3>
            <span className="post">Web Developer</span>
            <ul className="social">
              <li><a href="#" className="fa fa-facebook"></a></li>
              <li><a href="#" className="fa fa-twitter"></a></li>
              <li><a href="#" className="fa fa-google-plus"></a></li>
              <li><a href="#" className="fa fa-linkedin"></a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="our-team">
            <div className="pic">
              <img src={joe2024} alt="Williamson" />
            </div>
            <h3 className="title">Aiman MOUHAT</h3>
            <span className="post">Web Developer</span>
            <ul className="social">
              <li><a href="#" className="fa fa-facebook"></a></li>
              <li><a href="#" className="fa fa-twitter"></a></li>
              <li><a href="#" className="fa fa-google-plus"></a></li>
              <li><a href="#" className="fa fa-linkedin"></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourteam;
