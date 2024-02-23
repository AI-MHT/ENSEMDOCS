import React from 'react';
import electricLogo from '../assets/images/electric.png';
import '../assets/css/oursponsor.css';

const Oursponsor = () => {
  return (
    <section className="bg-light py-5 py-xl-6">
      <div className="container mb-5 mb-md-6">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
            <h2 className="mb-4 display-5">Clients</h2>
            <p className="text-secondary mb-4 mb-md-5">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque et neque id ligula mattis commodo.</p>
            <hr className="w-50 mx-auto mb-0 text-secondary" />
          </div>
        </div>
      </div>
      <div className="container overflow-hidden">
        <div className="row gy-5 gy-md-6">
          <div className="col-6 col-md-3 align-self-center text-center">
            <img src={electricLogo} alt="Electric Logo" width="125" height="65" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Oursponsor;
