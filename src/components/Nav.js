import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand">
            Home <img src="images/dbslogo.png" alt="" />
            {/* replace dbs logo in public/images/ directory */}
          </Link>

          <div>
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item active">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
