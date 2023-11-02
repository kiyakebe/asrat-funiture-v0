import { NavLink } from "react-router-dom";
import style from "./style.module.css";
import { useState } from "react";

const ProfileDropdown = () => {
  return (
    <div className="dropdown text-end bg- ">
      <a
        href="#"
        className="d-block link-dark text-decoration-none dropdown-toggle"
        id="dropdownUser1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://github.com/mdo.png"
          alt="mdo"
          width="32"
          height="32"
          className="rounded-circle"
        />
      </a>
      <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
        <li>
          <a className="dropdown-item" href="/profile">
            Profile
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Orders
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <button
            // onClick={() => setIsLodegin(!islogedin)}
            type="button"
            className="btn btn-outline-primary w-100"
          >
            Sign out
          </button>
        </li>
      </ul>
    </div>
  );
};

const LoginButton = () => {
  return (
    <div className="d-flex justify-content-start justify-content-md-end">
      <NavLink
        to="/login"
        className=" col-6 flex-shrink-1 col-md-auto px-3 py-2 mx-2 btn btn-primary"
      >
        Login
      </NavLink>
      <NavLink
        to="/signup"
        className=" col-6 flex-shrink-1 col-md-auto  px-3 py-2 mx-2 btn btn-outline-primary"
      >
        Sigh up
      </NavLink>
    </div>
  );
};

const Header = () => {
  const [islogedin, setIsLodegin] = useState(false);

  return (
    <nav
      className={`navbar navbar-expand-md navbar-light my-3 ${style.nav}`}
      aria-label="Second navbar example"
    >
      <div className="container-md">
        <a className="navbar-brand" href="#">
          Asrat
        </a>
        <button
          className={`navbar-toggler ${style.toggler_btn}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navBar"
          aria-controls="navBar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end "
          id="navBar"
        >
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop">
                shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/gallery">
                Gallery
              </NavLink>
            </li>
          </ul>
          {islogedin ? <ProfileDropdown /> : <LoginButton />}
        </div>
      </div>
    </nav>
  );
};

export default Header;
