import React from "react";

export default function ZoeiUnique() {
  const PoweredStyle = {
    borderRight: "1px solid #9FC6D6",
  };

  return (
    <section className="py-5">
      <div className="container-fluid px-3 px-md-5">
        <h2 className="mb-4 fw-bold text-center text-lg-start">
          What Makes ZOEI ESG Unique?
        </h2>

        {/* ===== Top Row ===== */}
        <div
          className="row align-items-center rounded-4 p-3 p-md-4 mb-4 mx-0"
          style={{
            backgroundColor: "#9FC6D64D",
          }}
        >
          {/* Left Image */}
          <div className="col-lg-3 col-md-12 text-center mb-4 mb-lg-0">
            <img
              src="viewfoot.webp"
              alt="AI Powered Data"
              className="img-fluid rounded-4 shadow-sm"
              style={{
                maxHeight: "190px",
                width: "100%",
                maxWidth: "300px",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-9 col-md-12">
            <div className="row text-center text-lg-start">
              <div
                className="col-md-4 col-sm-12 mb-4 mb-md-0"
                style={PoweredStyle}
              >
                <h5 className="fw-semibold">AI-Powered Data Intelligence</h5>
                <p className="text-secondary mb-0 small">
                  Automated ESG metrics tracking with real-time dashboards
                </p>
              </div>
              <div
                className="col-md-4 col-sm-12 mb-4 mb-md-0"
                style={PoweredStyle}
              >
                <h5 className="fw-semibold">Carbon Emission Automation</h5>
                <p className="text-secondary mb-0 small">
                  Automatically monitor and generate reports for Scope 1, 2 & 3 emissions
                </p>
              </div>
              <div className="col-md-4 col-sm-12 mb-0">
                <h5 className="fw-semibold">Smart Compliance Engine</h5>
                <p className="text-secondary mb-0 small">
                  Align with CSRD, SEBI BRSR, GRI, and other global frameworks
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Bottom Row ===== */}
        <div
          className="row align-items-center rounded-4 p-3 p-md-4 mx-0"
          style={{
            backgroundColor: "#E9F3F7",
          }}
        >
          {/* Left Content */}
          <div className="col-lg-9 col-md-12 order-2 order-lg-1">
            <div className="row text-center text-lg-start">
              <div
                className="col-md-4 col-sm-12 mb-4 mb-md-0"
                style={PoweredStyle}
              >
                <h5 className="fw-semibold">Dynamic Materiality Mapping</h5>
                <p className="text-secondary mb-0 small">
                  Identify and prioritize ESG issues using AI-driven insights.
                </p>
              </div>
              <div
                className="col-md-4 col-sm-12 mb-4 mb-md-0"
                style={PoweredStyle}
              >
                <h5 className="fw-semibold">Workflow Automation</h5>
                <p className="text-secondary mb-0 small">
                  Assign tasks, set reminders, and streamline internal communication for ESG teams.
                </p>
              </div>
              <div className="col-md-4 col-sm-12">
                <h5 className="fw-semibold">Stakeholder Engagement Tools</h5>
                <p className="text-secondary mb-0 small">
                  Communicate and collaborate with stakeholders through smart reporting features.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-3 col-md-12 text-center mb-4 mb-lg-0 order-1 order-lg-2">
            <img
              src="green-tree.webp"
              alt="Sustainability"
              className="img-fluid rounded-4 shadow-sm"
              style={{
                maxHeight: "190px",
                width: "100%",
                maxWidth: "300px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
