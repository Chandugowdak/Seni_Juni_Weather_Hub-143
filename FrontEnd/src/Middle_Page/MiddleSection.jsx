import React from 'react';
import { Link } from 'react-router-dom';
import './MiddleSection.css';

const MiddleSection = () => {
  return (
    <div>
      <div className="Div_Section">
        <Link to="/Today" className="Sub_Div">Today</Link>
        <Link to="/Hoverly" className="Sub_Div">Hourly</Link>
        <Link to="/Daily" className="Sub_Div">Daily</Link>
        <Link to="/" className="Sub_Div">Monthly</Link>
        <Link to="/" className="Sub_Div">Air Quality</Link>
        <Link to="/Pred" className="Sub_Div">Predicted</Link>
      </div>
    </div>
  );
};

export default MiddleSection;
