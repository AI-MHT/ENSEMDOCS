import React from "react";
import Header from "../components/Header";
import Block from "../components/block";

const Departement = () => {
  return (
    <div className="main-layout">
      <header>
        <div className="header">
          <div className="white_bg">
            <Header />
            <section className="banner_main">
              <div className="cards-list">
                <Block
                  imageUrl={process.env.PUBLIC_URL + "/assets/images/gld.jpg"}
                  altText="GLD-LOGO"
                  title="genie logiciel et digitalisation"
                  linkTo="/Gld"
                />
                <Block
                  imageUrl={process.env.PUBLIC_URL + "/assets/images/mec.jpg"}
                  altText="MECANIQUE-LOGO"
                  title="genie mecanique"
                  linkTo="/CVs"
                />
                <Block
                  imageUrl={process.env.PUBLIC_URL + "/assets/images/electric.jpg"}
                  altText="ELEC-LOGO"
                  title="genie electrique"
                  linkTo="/CVs"
                />
                <Block
                  imageUrl={process.env.PUBLIC_URL + "/assets/images/indusss.jpg"}
                  altText="INDUS-LOGO"
                  title="genie industriel"
                  linkTo="/CVs"
                />
                <Block
                  imageUrl={process.env.PUBLIC_URL + "/assets/images/all.jpg"}
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
  );
};

export default Departement;
