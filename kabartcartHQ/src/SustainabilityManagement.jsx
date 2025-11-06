import React from "react";

export default function SustainabilityManagement() {
  const headingStyle = {
    color: "#F76103",
    fontFamily: '"Maison Neue", Sans-serif',
    fontSize: "18px",
    fontWeight: 500,
  };

  return (
    <section className="py-5">
      <div className="container-fluid px-3 px-md-5">
        <div className="row align-items-center gy-4">
          {/* Left Section */}
          <div className="col-lg-7 col-md-12">
            <h6 style={headingStyle}>ZOEI ESG Solutions</h6>
            <h2 className="display-6 mb-3">
              Automated Sustainability <br /> Management
            </h2>

            <p className="text-secondary mb-4">
              ZOEI ESG by Bellurbis LLC is an AI software for automating your ESG
              journey. It enhances data collection, compliance tracking, and
              reporting. From carbon tracking to NetZero planning, ZOEI simplifies
              ESG management.
            </p>

            {/* Tabs */}
            <ul className="nav nav-tabs border-0 mb-4 flex-wrap">
              <li className="nav-item mb-2 me-2">
                <button
                  className="nav-link active text-white"
                  style={{
                    backgroundColor: "#004D4D",
                    borderRadius: "6px",
                    border: "none",
                  }}
                >
                  Automated ESG Reporting
                </button>
              </li>
              <li className="nav-item mb-2 me-2">
                <button
                  className="nav-link text-dark bg-light border-0 rounded-2"
                  style={{ border: "1px solid #ddd" }}
                >
                  Annual & Integrated Reports
                </button>
              </li>
              <li className="nav-item mb-2 me-2">
                <button
                  className="nav-link text-dark bg-light border-0 rounded-2"
                  style={{ border: "1px solid #ddd" }}
                >
                  Carbon Footprint Automation
                </button>
              </li>
              <li className="nav-item mb-2 me-2">
                <button
                  className="nav-link text-dark bg-light border-0 rounded-2"
                  style={{ border: "1px solid #ddd" }}
                >
                  Governance & Stakeholder Tools
                </button>
              </li>
            </ul>

            {/* Description */}
            <p className="text-secondary mb-4">
              Collecting ESG data manually is not just time-consuming—it's
              error-prone, inefficient, and frustrating. With ZOEI’s intelligent
              automation, you can simplify the entire ESG data journey. From data
              collection and validation to reporting and disclosures, our
              platform reduces the burden on your team, ensures accuracy, and
              helps you stay audit-ready.
              <br />
              <br />
              It’s a smarter, faster way to meet regulatory requirements while
              giving you time back to focus on strategy and impact.
            </p>

            {/* CTA Button */}
            <a
              href="#"
              className="btn btn-dark px-4 py-2 rounded-2"
              style={{ backgroundColor: "#004D4D", border: "none" }}
            >
              Book a Demo
            </a>
          </div>

          {/* Right Image */}
          <div className="col-lg-5 col-md-12 text-center">
            <img
              src="graf-2.webp"
              alt="ZOEI Dashboard"
              className="img-fluid"
              style={{
                maxHeight: "350px",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
