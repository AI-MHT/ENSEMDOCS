import React from "react";
import Header from "../components/Header"
import Block from "../components/block";
import myImage from '../public/assets/images/electric.jpg';


const Departement=()=>{
    return(
        <div className="main-layout">
        <header>
          <div className="header">
              <div className="white_bg">
              <Header/>
                <section className="banner_main">
                    <div className="cards-list">
                        <Block
                          imageUrl="assets/images/gld.jpg"
                          altText="GLD-LOGO"
                          title="genie logiciel et digitalisation"
                          linkTo="/Gld"
                        />
                        <Block
                          imageUrl="assets/images/mec.jpg"
                          altText="MECANIQUE-LOGO"
                          title="genie mecanique"
                          linkTo="/CVs"
                        />
                        <Block
                          imageUrl={myImage}
                          altText="ELEC-LOGO"
                          title="genie electrique"
                          linkTo="/CVs"
                        />
                        <Block
                          imageUrl="assets/images/indusss.jpg"
                          altText="INDUS-LOGO"
                          title="genie industriel"
                          linkTo="/CVs"
                        />
                        <Block
                          imageUrl="assets/images/all.jpg"
                          altText="ALL-LOGO"
                          title="view all"
                          linkTo="/CVs"
                        />
                      </div>
                  </section>
              </div>
          </div>
        </header>
        </div>
    )
}

export default Departement;