const About = ({ title, description }) => {
    return (
      <section className="banner_main">
        <div className="about">
          <div className="container">
            <div className="row d_flex">
              <div className="col-md-12 col-lg-12">
                <div className="titlepage">
                  <h2>
                    <span className="yellow">{title}</span>
                    <br />
                    Welcome TO ENSEMDOCS
                  </h2>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  