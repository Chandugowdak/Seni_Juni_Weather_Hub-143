// Home.jsx

import React, { useState } from "react";
import "./Home.css"; // Import CSS for styling
import image from "./Logo.jpg";
import { Link, useHistory } from "react-router-dom";
import MiddleSection from "./MiddleSection";

const Home = () => {
  const [search, setSearch] = useState(""); // State for search input
  
  const [error, setError] = useState(false); // State for error handling

  const history = useHistory(); // To navigate between pages

  const handleSearch = () => {
    if (search.trim() === "") {
      alert("No Data To Search");
    } else if (search.toLowerCase() === "kodagu"){
      setError(false);
      history.push("/Beng");
    } else if( search.toLowerCase() === "hassan") {
            history.push('/hassan');
            setError(false);
    }  else{alert("Invalid Data");
    setError(true);
    }
  };

  return (
    <div>
      {/* Navigation Bar */}
      <div className="Nav_Bar">
        <div className="Nav_Left">
          <img className=""
            id="image_id"
            src={image}
            alt="Logo"
            height="55px"
            width="110px"
            title="Price_Loom"
          />
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="Search_Section"
            type="text"
            placeholder="Enter the Search"
          />
          <button
            onClick={handleSearch}
            className="btn bg-primary"
            id="button"
          >
            <i className="fas fa-search p-1"></i>
          </button>
        </div>

      

        <div className="Nav_Right">
        
          <Link className="Nav_Section" to="/Bio">
            BioDiversity
          </Link>
          <Link className="Nav_Section" to="/Weather">
            Weather Newes
          </Link>
          <Link className="Nav_Section" to="/Pollut">
            Pollution
          </Link>
          <Link className="Nav_Section" to="/Private">
           Private Policy
          </Link>
         
        </div>
      </div>

     
      <MiddleSection/>
       {/* Error Message */}
       {error && <h1 className="text-center text-danger mt-5">404 ERROR</h1>}
    </div>
  );
};

export default Home;
