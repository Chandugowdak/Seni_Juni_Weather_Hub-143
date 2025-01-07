import React from 'react';
import { Link } from 'react-router-dom';
import './MiddleSection.css';

const MiddleSection = () => {
  return (
    <div>
      <div className="Div_Section">
        <Link to="/Coorg" className="Sub_Div">Today</Link>
        <Link to="/Hoverly" className="Sub_Div">Hourly</Link>
       
        <Link to="/Air_Qu" className="Sub_Div">Air_Quality</Link>
        <Link to="/Heal_Act" className="Sub_Div">Health & Activities</Link>
        <Link to="/Pred" className="Sub_Div">Predicted</Link>
      </div>
    </div>
  );
};

export default MiddleSection;
