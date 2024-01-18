import React from "react";
import Header from "../components/Header"
import Block from "../components/block";


//import images
import All from "../assets/images/all.png"
import Gld from "../assets/images/gld.png"
import Indus from "../assets/images/indus.png"
import Elec from "../assets/images/electric.png"
import Mec from "../assets/images/mec.png"


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
                          imageUrl={Gld}
                          altText="GLD-LOGO"
                          title="genie logiciel et digitalisation"
                          linkTo="/Gld"
                        />
                        <Block
                          imageUrl={Mec}
                          altText="MECANIQUE-LOGO"
                          title="genie mecanique"
                          linkTo="/CVs"
                        />
                        <Block
                          imageUrl={Elec}
                          altText="ELEC-LOGO"
                          title="genie electrique"
                          linkTo="/CVs"
                        />
                        <Block
                          imageUrl={Indus}
                          altText="INDUS-LOGO"
                          title="genie industriel"
                          linkTo="/CVs"
                        />
                        <Block
                          imageUrl={All}
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