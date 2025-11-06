import React from "react";

export default function ESGCTA() {
  const sectionStyle = {
    backgroundColor: "#004D4D",
    color: "#fff",
    borderRadius: "20px",
    padding: "40px 30px",
  };

  const headingStyle = {
    fontSize: "25px",
    fontWeight: 600,
    marginBottom: "10px",
  };

  const paragraphStyle = {
    color: "#D9E7E8",
    fontSize: "13px",
    marginBottom: 0,
    lineHeight: "1.6",
  };

  const buttonStyle = {
    backgroundColor: "#fff",
    color: "#004D4D",
    
    border: "none",
    borderRadius: "6px",
    padding: "10px 25px",
    transition: "all 0.3s ease",
  };

  return (
    <section className="py-5">
      <div className="container-fluid px-4 px-md-5">
        <div className="row align-items-center justify-content-between" style={sectionStyle}>
          {/* Left Content */}
          <div className="col-lg-8 col-md-12 mb-3 mb-lg-0">
            <h2 style={headingStyle}>Effortless ESG for Every Stage of Your Journey</h2>
            <p style={paragraphStyle}>
              Let's build a future where sustainability is smart, automated, and impactful. 
              Work with ZOEI ESG — your AI-powered partner in sustainability transformation.
            </p>
          </div>

          {/* Right Button */}
          <div className="col-lg-3 col-md-12 text-lg-end text-center">
            <a
              href="#"
              className="btn shadow-sm"
              style={buttonStyle}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#F76103";
                e.target.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#fff";
                e.target.style.color = "#004D4D";
              }}
            >
            Book a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
