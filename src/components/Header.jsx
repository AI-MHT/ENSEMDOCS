import { NavLink } from "react-router-dom";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
          <div className="full">
            <div className="center-desk">
              <div className="logo">
                <NavLink to="/">
                  <img src="./assets/images/Logo.png" alt="LOGO-ENSEMDOCS" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
          <nav className="navigation navbar navbar-expand-md navbar-dark ">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample04"
              aria-controls="navbarsExample04"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample04">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link" to="/Departement">
                    Reports
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link" to="/CVs">
                    Cvs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link" to="/about">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link" to="/contact">
                    Contact Us
                  </NavLink>
                </li>

              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
