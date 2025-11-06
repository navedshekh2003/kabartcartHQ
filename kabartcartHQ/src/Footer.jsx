import React from "react";
import "./Footer.css";
import { BsEnvelopeFill, BsTelephoneFill, BsLinkedin, BsInstagram, BsX } from "react-icons/bs";

export default function Footer() {
  const footerStyle = {
    backgroundColor: "#004D4D",
    color: "#fff",
    paddingTop: "50px",
    paddingBottom: "20px",
  };

  const inputStyle = {
    borderRadius: "8px",
    padding: "10px 15px",
    border: "none",
    width: "100%",
  };

  const buttonStyle = {
    backgroundColor: "#2BA37A",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 20px",
    width: "100%",
    fontWeight: 500,
  };

  return (
    <footer style={footerStyle}>
      <div className="container-fluid px-4 px-md-5">
        <div className="row g-4 align-items-start">
          {/* Left Section */}
          <div className="col-lg-4 col-md-12 text-center text-md-start">
            <img
              src="footlogo.webp"
              alt="ZOEI ESG Logo"
              style={{ maxWidth: "140px", marginBottom: "10px" }}
            />
            <p className="text-light small mb-1">
              Manifesting Sustainable Life
            </p>

            <p className="text-light small mt-3 mb-1">
              *ZOEI ESG is proprietary brand name of SaaS platform of Sustain Vibe Innovations Pvt Ltd
            </p>

            <a href="#" className="text-light small text-decoration-none">
              Privacy Policy
            </a>
          </div>

          {/* Middle Section */}
          <div className="col-lg-4 col-md-6 text-center text-md-start">
            <h6 className="fw-semibold mb-3">Get in touch with us</h6>
            <p className="mb-2">
              <BsEnvelopeFill className="me-2 text-success" />
              <a
                href="mailto:admin@zoeiesg.com"
                className="text-light text-decoration-none"
              >
                admin@zoeiesg.com
              </a>
            </p>
            <p className="mb-3">
              <BsTelephoneFill className="me-2 text-success" />
              <a
                href="tel:+917389807159"
                className="text-light text-decoration-none"
              >
                +91-7389807159
              </a>
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="#" className="text-light fs-5">
                <BsLinkedin />
              </a>
              <a href="#" className="text-light fs-5">
                <BsX />
              </a>
              <a href="#" className="text-light fs-5">
                <BsInstagram />
              </a>
            </div>
          </div>

          {/* Right Section - Newsletter */}
          <div className="col-lg-4 col-md-6 text-center text-md-start">
            <h6 className="fw-semibold mb-3">
              Stay updated with our latest insights - subscribe to our newsletter.
            </h6>
            <form className="d-flex flex-column gap-2 align-items-center align-items-md-start">
              <input
                type="email"
                placeholder="Email Address *"
                required
                style={inputStyle}
              />
              <button type="submit" style={buttonStyle}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="my-4 text-light opacity-25" />

        {/* Bottom Copyright */}
        <div className="text-center small text-light">
          Copyright ©2025 All rights reserved
        </div>
      </div>
    </footer>
  );
}

