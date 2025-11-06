import React from "react";
import { Link } from "react-router-dom"; 

export default function Footprint() {
  const FootprintStyle = {
    fontFamily: '"Maison Neue", Sans-serif',
    fontSize: "20px",
    fontWeight: 200,
    color: "#F76103",
  };

  const CalculateStyle = {
    fontFamily: '"Maison Neue", Sans-serif',
    fontSize: "20px",
    fontWeight: 200,
    width: "90%",
    maxWidth: "600px",
  };

  return (
    <section className="py-5">
      <div className="container-fluid px-4 px-md-5">
        <div className="card border-2 shadow-sm rounded-4 overflow-hidden">
          <div className="row align-items-center g-0 flex-column-reverse flex-lg-row">
            {/* Left Content */}
            <div className="col-lg-7 col-md-12 p-4 p-md-5 position-relative text-center text-lg-start">
              <h6 style={FootprintStyle}>Footprint Calculator</h6>

              <h2 className="mb-3 fs-2 fs-md-1">Know your carbon footprint?</h2>

              <p style={CalculateStyle} className="mx-auto mx-lg-0 mb-4">
                Calculate your Carbon Footprint and Make Sustainable Choices
              </p>

              {/* ✅ Correct Link structure */}
              <Link
                to="/calculator"
                className="btn btn-dark px-4 py-2 rounded-2 text-white text-decoration-none"
                style={{ backgroundColor: "#004D4D", border: "none" }}
              >
                Calculate Now
              </Link>
            </div>

            {/* Right Image */}
            <div className="col-lg-5 col-md-12 text-center bg-white p-4">
              <img
                src="greenfoot.webp"
                alt="Carbon Footprint"
                className="img-fluid"
                style={{
                  maxHeight: "270px",
                  objectFit: "cover",
                  borderRadius: "50px",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
