import React, { useState, useEffect } from "react";
import "./Feedback.css";

const Feedback = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showContent, setShowContent] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 300) {
      setShowContent(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && feedback) {
      setReviews([...reviews, { name, feedback }]);
      setName("");
      setFeedback("");
    }
  };

  return (
    <div className="container feedback-container py-4">
      {/* Weather and Environment Section */}
      <div className="weather-info text-center mb-5">
        <h1 className="mb-3 text-primary">Why Weather Matters?</h1>
        <p className="mb-4 fw-bold">
          Weather impacts our daily lives, from planning our activities to
          ensuring safety during extreme conditions. Being aware of the weather
          helps us prepare better and protect ourselves and the environment.
        </p>
        <div className="environment-tips">
          <h3 className="text-success mb-3 fw-bold">Save the Environment</h3>
          <ul className="fw-bold">
            <li>Reduce your carbon footprint by using public transport.</li>
            <li>Plant trees to combat climate change.</li>
            <li>Use energy-efficient appliances and conserve water.</li>
          </ul>
        </div>
        <blockquote className="mt-4 fw-bold">
          <p className="fst-italic">
            "The Earth is what we all have in common." – Wendell Berry
          </p>
        </blockquote>
      </div>

      {/* Feedback Form Section */}
      <div
        className={`feedback-form shadow p-4 mb-5 rounded ${
          showContent ? "animate-slide-in" : ""
        }`}
      >
        <h2 className="text-center mb-4">Share Your Feedback</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="feedback" className="form-label">
              Feedback
            </label>
            <textarea
              className="form-control"
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write your feedback here"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-success w-100">
            Submit
          </button>
        </form>
      </div>

      {/* Feedback List Section */}
      <div className="feedback-list">
        <h3 className="text-center mb-4">What People Are Saying</h3>
        {reviews.length > 0 ? (
          <div className="row">
            {reviews.map((review, index) => (
              <div
                className={`col-md-6 mb-4 feedback-card ${
                  showContent ? "animate-fade-in" : ""
                }`}
                key={index}
              >
                <div className="card shadow-sm">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <div className="avatar me-3">
                        <img
                          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                            review.name
                          )}&background=random&rounded=true`}
                          alt="Avatar"
                          className="rounded-circle"
                        />
                      </div>
                      <h5 className="mb-0">{review.name}</h5>
                    </div>
                    <p className="feedback-text">{review.feedback}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted">
            Be the first to leave feedback!
          </p>
        )}
      </div>
    </div>
  );
};

export default Feedback;
