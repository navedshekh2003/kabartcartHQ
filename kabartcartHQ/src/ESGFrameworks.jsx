import React from "react";

export default function ESGFrameworks() {
  const headingStyle = {
    color: "#F76103",
    fontSize: "18px",
    fontWeight: 500,
    textAlign: "center",
  };

  const logoBoxStyle = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    padding: "20px",
    transition: "all 0.3s ease",
    textAlign: "center",
  };

  const logos = [
    { src: "sci1.webp", alt: "Science Based Targets" },
    { src: "sci2.webp", alt: "TCFD" },
    { src: "sci3.webp", alt: "BRSR" },
    { src: "sci4.webp", alt: "CSRD" },
    { src: "sci5.webp", alt: "CDP" },
    { src: "sci6.webp", alt: "GRI" },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container-fluid px-4 px-md-5 text-center">
        {/* Section Heading */}
        <h6 style={headingStyle}>ESG Frameworks</h6>
        <h2 className=" mb-5">
          Corporate Reporting Customized for All Businesses
        </h2>

        {/* Logos Grid */}
        <div className="row justify-content-center g-4">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center"
            >
              <div
                style={logoBoxStyle}
                className="w-100 h-100 d-flex align-items-center justify-content-center hover-shadow"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="img-fluid"
                  style={{
                    maxHeight: "70px",
                    objectFit: "contain",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
