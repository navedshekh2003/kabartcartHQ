import React from "react";
import { BsPlus } from "react-icons/bs";

export default function IndustriesSection() {
  const sectionStyle = {
    backgroundColor: "#E9F3F7",
    color: "#000",
  };

  const headingStyle = {
    color: "#F76103",
    fontSize: "18px",
   
  };

  const industryList = [
    { name: "Financial Services & Insurance" },
    { name: "Manufacturing" },
    { name: "Automobile" },
    { name: "Retail" },
    { name: "Supply Chain & Logistics" },
    { name: "Services Industries" },
    { name: "Real Estate" },
    { name: "Others" },
  ];

  const images = [
    { src: "industry1.webp", alt: "Financial Services" },
    { src: "industry2.webp", alt: "Manufacturing" },
    { src: "industry3.webp", alt: "Construction" },
    { src: "industry4.webp", alt: "Shipping" },
    { src: "industry5.webp", alt: "Technology" },
    { src: "industry6.webp", alt: "Retail" },
    { src: "industry7.webp", alt: "Automobile" },
  ];

  return (
    <section className="py-5" style={sectionStyle}>
      <div className="container-fluid px-4 px-md-5">
        <div className="row align-items-center g-4">
          {/* Left Text Content */}
          <div className="col-lg-7 col-md-12">
            <h6 style={headingStyle}>Industries we Serve</h6>
            <h2 className=" mb-3">Built to Support All Industries</h2>
            <p className="text-dark mb-4" style={{ lineHeight: "1.6" }}>
              At ZOEI ESG, we offer customizable automation solutions that simplify ESG
              compliance and performance tracking – no matter your industry. From
              AI-powered due diligence to tailored Net Zero strategies, our platform
              adapts seamlessly to your operations, scale, and sustainability goals.
            </p>

            {/* Industry List */}
            <div className="row">
              <div className="col-md-6">
                {industryList.slice(0, 4).map((item, i) => (
                  <div
                    key={i}
                    className="d-flex align-items-center justify-content-between border-0 py-2"
                  >
                    <p className="mb-0 ">{item.name}</p>
                    <BsPlus size={22} color="#000" />
                  </div>
                ))}
              </div>
              <div className="col-md-6">
                {industryList.slice(4).map((item, i) => (
                  <div
                    key={i}
                    className="d-flex align-items-center justify-content-between border-0 py-2"
                  >
                    <p className="mb-0">{item.name}</p>
                    <BsPlus size={22} color="#000" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Collage Image */}
<div className="col-lg-4 col-md-8 col-sm-10 mx-auto text-center">
  <div
    className="rounded-4 overflow-hidden shadow-sm"
    style={{
      backgroundColor: "#fff",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      maxWidth: "90%",
      margin: "0 auto",
    }}
  >
    <img
      src="worker.webp" 
      alt="Industries Collage"
      className="img-fluid w-100"
      style={{
        borderRadius: "12px",
        objectFit: "cover",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={(e) => (e.target.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
    />
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
