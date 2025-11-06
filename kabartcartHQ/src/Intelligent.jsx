import React from "react";

export default function Intelligent() {
 const intelligentStyle = {
    fontFamily: '"Maison Neue", Sans-serif',
    fontSize: "20px",
    fontWeight: 200,
    color: "#F76103",
  };
   const PoweredStyle = {
    fontFamily: '"Maison Neue", Sans-serif',
    fontSize: "20px",
    fontWeight: 200,
    width: "80%",

  };

  return ( 
  
  <>
  <section className="py-5">
      <div className="container-fluid px-5">
        <div className="row align-items-center">
          {/* Left Text Column */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <h5 style={intelligentStyle}>
              Your Intelligent Partner in
            </h5>
            <h1 className="display-5 mb-3">
              ESG &amp; Sustainability <br /> Automation
            </h1>
            <p style={PoweredStyle}>
              AI-Powered ESG Software | Automated ESG Reporting | Carbon
              Emissions Monitoring | Stakeholder Engagement Tools |
              AI-Driven Sustainability Strategy
            </p>
            <a
              href="#"
              className="btn btn-dark px-4 py-2 rounded-2"
              style={{ backgroundColor: "#004D4D", border: "none" }}
            >
              Book a Demo
            </a>
          </div>

          {/* Right Image Column */}
          <div className="col-lg-6 col-md-12 text-center">
            <img
              src="imggraf.webp"
              alt="Dashboard Preview"
              className="img-fluid rounded-3 shadow-sm"
              style={{ maxHeight: "420px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  


  </>
    
   );
}
