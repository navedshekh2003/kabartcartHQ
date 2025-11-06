import React from "react";

export default function AboutZoei() {
  const headingStyle = {
    color: "#F76103",
    fontFamily: '"Maison Neue", Sans-serif',
    fontSize: "20px",
    fontWeight: 500,
  };

  const paragraphStyle = {
    color: "#333",
    fontSize: "17px",
    lineHeight: "1.6",
    fontFamily: '"Maison Neue", Sans-serif',
  };

  return (
    <section className="py-5">
      <div className="container-fluid px-4 px-md-5">
        <div className="row align-items-center gy-4">
          {/* Left Text Content */}
          <div className="col-lg-7 col-md-12">
            <h6 style={headingStyle}>About ZOEI</h6>

            <h2 className="display-6 mb-4">
              AI-Driven ESG & Sustainability Software <br /> for Enterprises
            </h2>

            <p style={paragraphStyle}>
              ZOEI ESG, an innovation by Bellurbis LLC (established in 2010), is a
              next-generation AI-powered ESG and sustainability software designed
              to automate and optimize every stage of your ESG journey.
            </p>

            <p style={paragraphStyle}>
              Built for scalability and regulatory alignment, ZOEI ESG empowers
              organizations to automate ESG data collection, compliance tracking,
              and sustainability reporting with unprecedented accuracy. From
              carbon emissions tracking to NetZero goal planning, ZOEI streamlines
              complex tasks through intelligent automation and real-time analytics.
            </p>

            <p style={paragraphStyle}>
              Whether you’re a growing startup or a large enterprise, ZOEI ESG
              simplifies ESG management with tools designed for decision-making,
              transparency, and stakeholder confidence.
            </p>
          </div>

          {/* Right Video Section */}
          <div className="col-lg-5 col-md-12 text-center">
            <div
              className="position-relative d-inline-block w-100"
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                className="ratio ratio-16x9"
                style={{ borderRadius: "12px", overflow: "hidden" }}
              >
                <iframe
                  src="https://www.youtube.com/embed/jdRn4MNgjzg?autoplay=0&mute=0&rel=0"
                  title="ZOEI ESG Overview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    border: "none",
                    width: "100%",
                    height: "100%",
                    borderRadius: "12px",
                  }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
