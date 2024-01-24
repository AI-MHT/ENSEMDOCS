import '../assets/css/infocall.css';
const Infocall = () => {
  return (
    <section className="banner_main">
      <div className="container bootstrap snippets">
        <div className="row text-center">
          <div className="col-sm-4">
            <div className="contact-detail-box">
              <i className="fa fa-envelope fa-3x text-colored"></i>
              <h4>Email</h4>
              <a href="mailto:Ensemdocs@gmail.com" >Ensemdocs@gmail.com</a>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="contact-detail-box">
              <i className="fa fa-map-marker fa-3x text-colored"></i>
              <h4>Our Location</h4>
              <address>
                G8RV+C57, N1, Casablanca<br />
                ENSEM<br />
                <a href="https://www.google.com/maps/place/Pharmacie+Des+Universit%C3%A9s/@33.5405363,-7.6577928,17.5z/data=!4m15!1m8!3m7!1s0xda62cdfaf9c50ef:0xdfd962a5e6397089!2sENSEM-Ecole+Nationale+Sup%C3%A9rieure+d'Electricit%C3%A9+et+de+M%C3%A9canique+de+Casablanca,+Casablanca!3b1!8m2!3d33.5398149!4d-7.6571846!16s%2Fg%2F11bw3hj7q7!3m5!1s0xda62cdeedbce137:0xd864c7397f9c521d!8m2!3d33.5408125!4d-7.6586875!16s%2Fg%2F11c5hw5hy5?entry=ttu" target="_blank" rel="noopener noreferrer">
                  View on Google Maps
                </a>
              </address>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="contact-detail-box">
              <i className="fa fa-phone fa-3x text-colored"></i>
              <h4>Phone</h4>
              <a href="tel:+212633889902" >+212633889902</a><br/>
              <a href="https://wa.me/+212633889902"  target="_blank" rel="noopener noreferrer">Open Whatssap</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default Infocall;
