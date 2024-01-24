import React from 'react';
import '../assets/css/partner.css';

const Partner = () => {
  return (
    <div id="logo-slider">
      <button className='arrow prev'></button>
      <button className='arrow next'></button>
      <div className="logo-slider-frame">
        <div className="logo-slider-item">
          <div className="logo-slider-inset">
            <img src="http://www.synusie.de/images/codepen/partner/santander-allianz.png" alt="Santander Allianz" />
          </div>
        </div>
        <div className="logo-slider-item">
          <div className="logo-slider-inset">
              <img src="http://www.synusie.de/images/codepen/partner/allianz-targo.png" alt="Santander Allianz"/>
          </div>
        </div>
    
        <div className="logo-slider-item">
          <div className="logo-slider-inset">
              <img src="http://www.synusie.de/images/codepen/partner/hypo-wuestenrot.png" alt="Santander Allianz"/>
          </div>
        </div>    
        
        <div className="logo-slider-item">
          <div className="logo-slider-inset">
              <img src="http://www.synusie.de/images/codepen/partner/ing-dkb.png" alt="Santander Allianz"/>
          </div>
        </div>

        <div className="logo-slider-item">
          <div className="logo-slider-inset">
              <img src="http://www.synusie.de/images/codepen/partner/creditplus-dsl.png" alt="Santander Allianz"/>
          </div>
        </div>

        <div className="logo-slider-item">
          <div className="logo-slider-inset">
              <img src="http://www.synusie.de/images/codepen/partner/lbs-kfw.png" alt="Santander Allianz"/>
          </div>
        </div>
        
        <div class="logo-slider-item">
          <div className="logo-slider-inset">
              <img src="http://www.synusie.de/images/codepen/partner/barclaycard-hanseatic.png" alt="Santander Allianz"/>
          </div>
        </div>
        
        <div className="logo-slider-item">
          <div className="logo-slider-inset">
              <img src="http://www.synusie.de/images/codepen/partner/sparkasse-volksbank.png" alt="Santander Allianz"/>
          </div>
        </div>
        
       


      </div>
    </div>
  );
};

export default Partner;
