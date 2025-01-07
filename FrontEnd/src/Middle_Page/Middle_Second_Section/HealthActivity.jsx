import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './HealthActivity.css';

const Montley = () => {
  const sections = [
    {
      title: "Health",
      subtitle: "How will the weather impact my health today?",
      items: [
        { icon: "🩹", label: "Arthritis", status: "Low", statusColor: "green" },
        { icon: "💨", label: "Sinus Pressure", status: "High", statusColor: "red" },
        { icon: "📦", label: "Common Cold", status: "Low", statusColor: "green" },
        { icon: "🛏️", label: "Flu", status: "Low", statusColor: "green" },
        { icon: "💊", label: "Migraine", status: "Low", statusColor: "green" },
      ],
    },
    {
      title: "Outdoor Activities",
      subtitle: "What should I do today?",
      items: [
        { icon: "🎣", label: "Fishing", status: "Fair", statusColor: "yellow" },
        { icon: "🏃", label: "Running", status: "Good", statusColor: "green" },
        { icon: "⛳", label: "Golf", status: "Good", statusColor: "yellow" },
        { icon: "🚴", label: "Biking & Cycling", status: "Good", statusColor: "green" },
        { icon: "🏖️", label: "Beach & Pool", status: "Good", statusColor: "green" },
      ],
    },
    {
      title: "Health Food",
      subtitle: "What foods are beneficial for your health?",
      items: [
        { icon: "🥦", label: "Broccoli", status: "Superfood", statusColor: "green" },
        { icon: "🍎", label: "Apples", status: "High in Fiber", statusColor: "green" },
        { icon: "🥑", label: "Avocados", status: "Healthy Fats", statusColor: "green" },
        { icon: "🍓", label: "Berries", status: "Rich in Antioxidants", statusColor: "green" },
        { icon: "🐟", label: "Salmon", status: "Omega-3 Rich", statusColor: "green" },
      ],
    },
    {
      title: "Reading Books",
      subtitle: "Recommended books for becoming rich and successful.",
      items: [
        { icon: "📘", label: "Rich Dad Poor Dad", status: "by Robert Kiyosaki", statusColor: "blue" },
        { icon: "📗", label: "The Millionaire Next Door", status: "by Thomas J. Stanley", statusColor: "blue" },
        { icon: "📙", label: "Think and Grow Rich", status: "by Napoleon Hill", statusColor: "blue" },
        { icon: "📕", label: "The Intelligent Investor", status: "by Benjamin Graham", statusColor: "blue" },
        { icon: "📒", label: "Atomic Habits", status: "by James Clear", statusColor: "blue" },
      ],
    },
  ];

  return (
    <div className="container mt-5">
      {sections.map((section, index) => (
        <div key={index} className="mb-5">
          <h3>{section.title}</h3>
          <p className="text-muted">{section.subtitle}</p>
          <div className="row">
            {section.items.map((item, idx) => (
              <div className="col-lg-2 col-md-4 col-sm-6 mb-3" key={idx}>
                <div
                  className="p-3 shadow-sm rounded text-center"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <div className="fs-1">{item.icon}</div>
                  <h5 className="mt-2">{item.label}</h5>
                  <div
                    className="fw-bold"
                    style={{ color: item.statusColor }}
                  >
                    {item.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Montley;
