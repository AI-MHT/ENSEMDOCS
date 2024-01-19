import { Link } from 'react-router-dom';
import logo from '../assets/images/Logddo.png'

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-md navbar-light">
            {/* Logo on the left */}
            <Link to="/" className="navbar-brand" rel="noopener noreferrer">
              <img src={logo} alt="Logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navigation items on the right */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto py-4 py-md-0">
                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                  <Link to="/Departement" className="nav-link dropdown-toggle" data-toggle="dropdown" >
                    Reports
                  </Link>
                  <div className="dropdown-menu">
                    <Link to="/Gld" className="dropdown-item">
                      GLD
                    </Link>
                    <Link to="#" className="dropdown-item">
                      GM
                    </Link>
                    <Link to="#" className="dropdown-item">
                      GE
                    </Link>
                    <Link to="#" className="dropdown-item">
                      GIL
                    </Link>
                    <Link to="#" className="dropdown-item">
                      ALL
                    </Link>
                  </div>
                </li>
                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                  <Link to="/CVs" className="nav-link">
                    CVs
                  </Link>
                </li>
                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                  <Link to="/about" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                  <Link to="/contact" className="nav-link">
                    Contact Us
                  </Link>
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
