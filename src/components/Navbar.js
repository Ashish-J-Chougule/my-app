import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.navbarMode} bg-${props.navbarMode}`}
      data-bs-theme="props.navbarMode}"
    >
      <Link className="navbar-brand" to="/">
        <img
          src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
          alt="Logo"
          width="30"
          height="24"
          className="d-inline-block align-text-top"
        />
        {props.title}
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

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown link
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" href="/">
                  Action
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/">
                  Another action
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/">
                  Something else here
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        <form className="d-flex col-4 mx-3" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>

        <div className="form-check form-switch col-2">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label
            className="form-check-label"
            id="switch"
            htmlFor="flexSwitchCheckDefault"
            style={{ textTransform: "capitalize" }}
          >
            {props.navbarMode} mode on
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.protoTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
