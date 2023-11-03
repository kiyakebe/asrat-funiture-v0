import { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";

import profile from "../../../assets/profile/user.jpg";

const ProfileDropdown = () => {
  return (
    <div className={`dropdown text-end ${style.drop_down}`}>
      <a
        href="#"
        className="d-block link-dark text-decoration-none dropdown-toggle"
        id="useProfile"
        data-bs-toggle="dropdown"
        aria-expanded="true"
      >
        <img
          src={profile}
          alt="mdo"
          width="32"
          height="32"
          className="rounded-circle"
        />
      </a>
      <ul className="dropdown-menu text-small" aria-labelledby="useProfile">
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
          <button type="button" className="btn btn-outline-primary w-100">
            Sign out
          </button>
        </li>
      </ul>
    </div>
  );
};

const LoginButton = () => {
  return (
    <div className="d-flex justify-content-start justify-content-md-end ">
      <NavLink
        to="/login"
        className={`col-6 flex-shrink-1 col-md-auto px-3 py-1 mx-2 ${style.auth_btn} ${style.btn_login}`}
      >
        Login
      </NavLink>
      <NavLink
        to="/signup"
        className={`col-6 flex-shrink-1 col-md-auto px-3 py-1 mx-2 ${style.auth_btn} ${style.btn_signup}`}
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
      className={`navbar navbar-expand-md navbar-light py-1 position-fixed w-100 ${style.nav}`}
      aria-label="Second navbar example"
    >
      <div className="container-md">
        <a className={`navbar-brand fs-2 ${style.brand}`} href="#">
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
              <NavLink className={style.links} to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={style.links} to="/shop">
                shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={style.links} to="/gallery">
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={style.links} to="/about">
                About
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
