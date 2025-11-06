import React, { useState } from "react";

const questions = [
  {
    question: "Which vehicle do you use most often?",
    options: ["Car", "Motorcycle", "I walk or ride a bicycle"],
    img: "bike.webp",
  },
  {
    question: "What type of fuel do you use for your vehicle?",
    options: ["Petrol", "Diesel", "CNG", "Electric Vehicle"],
    img: "petrol.webp",
  },
  {
    question: "How many kilometers do you travel on average per month?",
    type: "slider",
    min: 0,
    max: 1000,
    step: 10,
    unit: "km/month",
    img: "airplane.webp",
  },
  {
    question:
      "How many kilometers a day do you travel using electric public transport vehicles?",
    type: "slider",
    min: 0,
    max: 100,
    step: 1,
    unit: "km/day",
    img: "bus.webp",
  },
  {
    question: "What kind of home do you live in?",
    options: ["House", "Apartment"],
    img: "home.webp",
  },
  {
    question:
      "What is your average electricity consumption in kWh on a monthly basis?",
    type: "slider",
    min: 0,
    max: 2000,
    step: 50,
    unit: "kWh/month",
    img: "gobike.webp",
  },
];

function CO2Calculator() {
  const [userType, setUserType] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [sliderValue, setSliderValue] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [carbonResult, setCarbonResult] = useState(0);

  // Emission factors (approximate kg CO₂ per unit)
  const emissionFactors = {
    Car: 0.192, // kg CO2 per km
    Motorcycle: 0.1,
    Bicycle: 0.0,
    Petrol: 0.192,
    Diesel: 0.171,
    CNG: 0.126,
    "Electric Vehicle": 0.05,
    Electricity: 0.82, // kg CO2 per kWh
  };

  const handleUserSelect = (type) => setUserType(type);

  const handleOptionClick = (option) => {
    const key = questions[currentQuestion].question;
    setAnswers({ ...answers, [key]: option });
    goNext();
  };

  const handleSliderChange = (value) => setSliderValue(value);

  const handleSliderSubmit = () => {
    const key = questions[currentQuestion].question;
    setAnswers({ ...answers, [key]: sliderValue });
    goNext();
  };

  const goNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSliderValue(0);
    } else {
      calculateCarbonFootprint();
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setUserType(null);
    setCurrentQuestion(0);
    setAnswers({});
    setSliderValue(0);
    setCarbonResult(0);
    setShowResults(false);
  };

  // ✅ Carbon calculation logic
  const calculateCarbonFootprint = () => {
    let totalCO2 = 0;

    const vehicle = answers["Which vehicle do you use most often?"];
    const fuel = answers["What type of fuel do you use for your vehicle?"];
    const kmPerMonth = parseFloat(
      answers["How many kilometers do you travel on average per month?"] || 0
    );
    const electricTravel = parseFloat(
      answers[
        "How many kilometers a day do you travel using electric public transport vehicles?"
      ] || 0
    );
    const electricityUse = parseFloat(
      answers[
        "What is your average electricity consumption in kWh on a monthly basis?"
      ] || 0
    );

    // Vehicle emission
    if (vehicle && fuel) {
      let factor =
        emissionFactors[fuel] || emissionFactors[vehicle] || 0.15;
      totalCO2 += kmPerMonth * factor;
    }

    // Electric transport (less emission)
    totalCO2 += electricTravel * 30 * 0.05; // per day * 30 days

    // Home electricity usage
    totalCO2 += electricityUse * emissionFactors["Electricity"];

    // Convert to tons (tCO2e)
    const tons = totalCO2 / 1000;
    setCarbonResult(tons.toFixed(4));
  };

  return (
    <div
      className="container py-5"
      style={{ minHeight: "100vh", backgroundColor: "#f8fdf9" }}
    >
      {/* STEP 1: Choose Individual or Organization */}
      {!userType && (
        <div className="text-center">
          <h4 className="text-muted mb-2">Welcome to the</h4>
          <h2 className="fw-bold mb-3 text-success">CO₂ Calculator</h2>
          <p className="mb-4 text-secondary">
            Know how much CO₂ you generate!
          </p>
          <hr className="mb-4" style={{ width: "50%", margin: "0 auto" }} />
          <h5 className="mb-4 fw-semibold text-secondary">Who you are?</h5>

          <div className="row justify-content-center g-4">
            {/* Individual */}
            <div className="col-8 col-sm-5 col-md-3">
              <div
                className="card shadow-sm border-0 p-3 text-center"
                style={{
                  cursor: "pointer",
                  borderRadius: "20px",
                  transition: "transform 0.3s ease",
                  backgroundColor: "#ecf9ea",
                }}
                onClick={() => handleUserSelect("Individual")}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "180px" }}
                >
                  <img
                    src="/individual.webp"
                    alt="Individual"
                    className="img-fluid"
                    style={{ maxHeight: "160px" }}
                  />
                </div>
                <h5 className="fw-bold text-success mt-3">Individual</h5>
              </div>
            </div>

            {/* Organization */}
            <div className="col-8 col-sm-5 col-md-3">
              <div
                className="card shadow-sm border-0 p-3 text-center"
                style={{
                  cursor: "pointer",
                  borderRadius: "20px",
                  transition: "transform 0.3s ease",
                  backgroundColor: "#ecf9ea",
                }}
                onClick={() => handleUserSelect("Organization")}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "180px" }}
                >
                  <img
                    src="/organization.webp"
                    alt="Organization"
                    className="img-fluid"
                    style={{ maxHeight: "160px" }}
                  />
                </div>
                <h5 className="fw-bold text-success mt-3">Organization</h5>
              </div>
            </div>
          </div>

          <p className="mt-4 small text-muted">
            <b>Disclaimer:</b> Emission calculation is based on 2023 DEFRA data.
          </p>
        </div>
      )}

      {/* STEP 2: Questions */}
      {userType && !showResults && (
        <div className="text-center">
          <h4 className="mb-3 text-secondary">
            {userType === "Individual"
              ? "Personal Carbon Calculator"
              : "Organization Carbon Calculator"}
          </h4>

          <div className="question mb-4">
            <h5 className="fw-bold text-success">
              Q. {questions[currentQuestion].question}
            </h5>
          </div>

          {/* ✅ Render normal buttons OR slider based on question type */}
          <div className="options mb-4">
            {questions[currentQuestion].type === "slider" ? (
              <div
                className="p-3 rounded"
                style={{
                  backgroundColor: "#ecf9ea",
                  maxWidth: "700px",
                  margin: "0 auto",
                }}
              >
                <input
                  type="range"
                  min={questions[currentQuestion].min}
                  max={questions[currentQuestion].max}
                  step={questions[currentQuestion].step}
                  value={sliderValue}
                  onChange={(e) => handleSliderChange(e.target.value)}
                  className="form-range"
                />
                <p className="text-dark fw-semibold">
                  {sliderValue} {questions[currentQuestion].unit}
                </p>
                <button
                  onClick={handleSliderSubmit}
                  className="btn btn-success mt-3 px-4"
                >
                  Next
                </button>
              </div>
            ) : (
              questions[currentQuestion].options?.map((option, index) => (
                <button
                  key={index}
                  className="btn btn-outline-success mx-2 mb-2 w-100 w-md-auto"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </button>
              ))
            )}
          </div>

          {/* Image */}
          <div className="image mb-4">
            <img
              src={questions[currentQuestion].img}
              alt="Question"
              className="img-fluid rounded-3 shadow-sm"
              style={{ maxHeight: "250px" }}
            />
          </div>

          {/* Navigation Buttons */}
          <div className="navigation-buttons">
            <button
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
              className="btn btn-secondary mx-2"
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Results */}
      {showResults && (
        <div className="text-center mt-5">
          <h3 className="fw-bold text-success">
            Your estimated carbon footprint (Monthly):
          </h3>
          <h2 className="fw-bold text-dark mt-2">{carbonResult} tCO₂e</h2>

          <div className="mt-4">
            <button onClick={handleRestart} className="btn btn-primary mx-2">
              Restart
            </button>
            <button className="btn btn-outline-secondary mx-2">
              Consult Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CO2Calculator;
