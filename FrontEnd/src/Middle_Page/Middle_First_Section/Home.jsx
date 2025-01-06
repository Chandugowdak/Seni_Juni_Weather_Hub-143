// Home.jsx

import React, { useState } from "react";
import "./Home.css"; // Import CSS for styling
import image from "./Login_Image.webp";
import { Link, useNavigate,Outlet } from "react-router-dom";
import MiddleSection from "../Middle_Second_Section/MiddleSection";

const Home = () => {
  const [search, setSearch] = useState(""); // State for search input
  
  const [error, setError] = useState(false); // State for error handling

  const history = useNavigate(); // To navigate between pages

  const handleSearch = () => {
    if (search.trim() === "") {
      alert("No Data To Search");
    } else if (search.toLowerCase() === "kodagu"){
      setError(false);
      history("/Beng");
    } else if( search.toLowerCase() === "hassan") {
            history('/hassan');
            setError(false);
    }  else{alert("Invalid Data");
    setError(true);
    }
  };

  return (
    <div>
      {/* Navigation Bar */}
      <div className="Nav_Bar">
       
          <img 
            id="image_id"
            src={image}
            alt="Logo"
            height="70px"
            width="110px"
            title="𝓢𝓮𝓷𝓲_𝓙𝓾𝓷𝓲_𝓦𝓮𝓪𝓽𝓱𝓮𝓻_𝓗𝓾𝓫"
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
        

      

        
        
          <Link className="Nav_Section" to="/Bio">
          Kodagu
          </Link>
          <Link className="Nav_Section" to="/Weather">
          Hassan
          </Link>
          <Link className="Nav_Section" to="/Pollut">
          Mysuru
          </Link>
          <Link className="Nav_Section" to="/Private">
          Dakshina Kannada
          </Link>
         <Link className="Nav_Section" to="/Private">
         Hubballi
         </Link>
         <Link className="Nav_Section" to="/Private">
         Kalaburagi
         </Link>
         <Link className="Nav_Section" to="/Private">
         Belagavi
         </Link>
          
        
      </div>

     
      <MiddleSection/>
       {/* Error Message */}
       {error && <h4 className="text-center fw-bold text-danger mt-5">404 Error: Page Not Found on Our Server</h4>}
       <Outlet />
    </div>
  );
};

export default Home;
