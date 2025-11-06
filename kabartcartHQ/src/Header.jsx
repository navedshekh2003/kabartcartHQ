import React from "react";

export default function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top w-100 ">
      <div className="container-fluid px-5"> 
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="/logo.webp" alt="Logo" width="120" className="me-2" />
        </a>

        {/* Toggler banaye h */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items h */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active text-success fw-semibold" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Zoei ESG
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ESG Suite
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Option 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Option 2
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Our Team
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="resourcesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </a>
              <ul className="dropdown-menu" aria-labelledby="resourcesDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Case Study
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side Button  banaya h */}
        <div className="d-none d-lg-block">
          <a
            href="#"
            className="btn btn-dark px-4 py-2 rounded-pill"
            style={{ backgroundColor: "#004D4D", border: "none" }}
          >
            Book a Demo
          </a>
        </div>
      </div>
    </nav>
    </>
  );
}
