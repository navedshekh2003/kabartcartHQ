import React from "react";
import { BsClipboardCheck, BsClipboardData, BsSpeedometer2, BsHeartPulse } from "react-icons/bs";

export default function ESGGoals() {
  const sectionStyle = {
    backgroundColor: "#004D4D",
    color: "#fff",
  };

  const cardStyle = {
    backgroundColor: "transparent",
    border: "1px solid rgba(255,255,255,0.4)",
    borderRadius: "8px",
    padding: "24px",
    height: "100%",
  };

  const headingStyle = {
    color: "#F76103",
    fontSize: "18px",
    fontWeight: 500,
  };

  return (
    <section className="py-5" style={sectionStyle}>
      <div className="container-fluid px-3 px-md-5">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-start flex-wrap mb-4">
          <div>
            <h6 style={headingStyle}>About ZOEI</h6>
            <h2 className="text-white mb-3">
              Achieve Your Corporate ESG Goals with Automation
            </h2>
          </div>

          {/* Arrows (Static UI for now) */}
          <div className="d-flex gap-2 mt-3 mt-lg-0">
            <button
              className="btn btn-outline-light rounded-circle"
              style={{ width: "40px", height: "40px" }}
            >
              <i className="bi bi-arrow-left"></i>
            </button>
            <button
              className="btn btn-outline-light rounded-circle"
              style={{ width: "40px", height: "40px" }}
            >
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Cards Row */}
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-lg-3 col-md-6">
            <div style={cardStyle}>
              <BsClipboardData size={35} color="#9FC6D6" className="mb-3" />
              <h5 className="fw-semibold text-white mb-3">
                Contribute meaningfully to environmental and social goals
              </h5>
              <ul className="text-light small ps-3">
                <li>Track emissions, waste, and diversity metrics in real time.</li>
                <li>Identify actionable areas for positive change.</li>
                <li>Progress toward Net Zero and greater social impact.</li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-3 col-md-6">
            <div style={cardStyle}>
              <BsClipboardCheck size={35} color="#9FC6D6" className="mb-3" />
              <h5 className="fw-semibold text-white mb-3">
                ESG Data Accuracy & Audit Readiness
              </h5>
              <ul className="text-light small ps-3">
                <li>Automate data collection and eliminate manual errors.</li>
                <li>Maintain a transparent audit trail for every metric.</li>
                <li>Stay fully prepared for audits and compliance checks.</li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-3 col-md-6">
            <div style={cardStyle}>
              <BsSpeedometer2 size={35} color="#9FC6D6" className="mb-3" />
              <h5 className="fw-semibold text-white mb-3">
                Industry-Specific ESG Strategy
              </h5>
              <ul className="text-light small ps-3">
                <li>Customize ESG workflows for your industry needs.</li>
                <li>Use pre-built templates and KPIs for quick setup.</li>
                <li>Benchmark and scale ESG maturity with ease.</li>
              </ul>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-lg-3 col-md-6">
            <div style={cardStyle}>
              <BsHeartPulse size={35} color="#9FC6D6" className="mb-3" />
              <h5 className="fw-semibold text-white mb-3">
                Accelerate ESG compliance
              </h5>
              <ul className="text-light small ps-3">
                <li>No more manual tracking or chasing spreadsheets.</li>
                <li>Stay aligned with CSRD, SEBI BRSR, and GRI frameworks.</li>
                <li>Be audit-ready with verified and up-to-date data.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
