import {Link} from "react-router-dom"

const Footer=()=>{
    return(
        <div className="footer-dark">
          <footer className="site-footer">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-sm-6 col-xs-12">
                  <p>
                    <strong>
                      Copyright © 2023 All Rights Reserved by
                      <Link to="https://github.com/AI-MHT"> AI-MHT</Link>.
                    </strong>
                  </p>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <ul className="social-icons">
                    <li>
                      <Link className="facebook" to="https://web.facebook.com/mhamed.mouhat">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="instagram" to="https://www.instagram.com/aiman_mht">
                        <i className="fa fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="github" to="https://github.com/AI-MHT">
                        <i className="fa fa-github"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="linkedin" to="https://ma.linkedin.com/in/aiman-mouhat-354a9a206">
                        <i className="fa fa-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
    )
}
export default Footer;