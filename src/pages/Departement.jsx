import React from "react";
import Header from "../components/Header"
import Block from "../components/block";


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
                          imageUrl="assets/images/gld.png"
                          altText="GLD-LOGO"
                          title="genie logiciel et digitalisation"
                          linkTo="/Gld"
                        />
                        <Block
                          imageUrl="assets/images/mec.png"
                          altText="MECANIQUE-LOGO"
                          title="genie mecanique"
                          linkTo="/CVs"
                        />
                        <Block
                          imageUrl="assets/images/electric.png"
                          altText="ELEC-LOGO"
                          title="genie electrique"
                          linkTo="/CVs"
                        />
                        <Block
                          imageUrl="assets/images/indus.png"
                          altText="INDUS-LOGO"
                          title="genie industriel"
                          linkTo="/CVs"
                        />
                        <Block
                          imageUrl="assets/images/all.png"
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