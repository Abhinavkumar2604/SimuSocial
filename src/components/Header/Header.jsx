import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Navbar = () => {
  return (
    <nav className="navbar my-navbar sticky-top">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link className="navbar-brand brand-name" to="/">
          User Management
        </Link>

        <ul className="nav">
          <li className="nav-item">
            <NavLink className="nav-link nav-link-custom" to="/">
              Home
            </NavLink>
          </li>
        
          <li className="nav-item">
            <NavLink className="nav-link nav-link-custom" to="/posts">
              Posts
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
