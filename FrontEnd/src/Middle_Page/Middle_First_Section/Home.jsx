import React, { useState, useContext } from "react";
import "./Home.css"; // Import CSS for styling
import image from "./Login_Image.webp";
import { Link, useNavigate, Outlet } from "react-router-dom";
import MiddleSection from "../Middle_Second_Section/MiddleSection";
import { CreateContext } from "../../Context_Globel_Store/CreateContext";

const Home = () => {
  const {  setLatitude,  setLongitude } = useContext(CreateContext); //IMPORTING THE CONTEXT

  // Function to update latitude and longitude when "Kodagu" is clicked
  const updateLocation = (newLatitude, newLongitude) => {
    setLatitude(newLatitude); // Set the new latitude value
    setLongitude(newLongitude); // Set the new longitude value
  };

  const [search, setSearch] = useState(""); // State for search input
  const [error, setError] = useState(false); // State for error handling
  const history = useNavigate(); // To navigate between pages

  const handleSearch = () => {
    if (search.trim() === "") {
      alert("No Data To Search");
    } else if (search.toLowerCase() === "kodagu") {
      setError(false);
      history("/Beng");
    } else if (search.toLowerCase() === "hassan") {
      history("/hassan");
      setError(false);
    } else {
      alert("Invalid Data");
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
        <button onClick={handleSearch} className="btn bg-primary" id="button">
          <i className="fas fa-search p-1"></i>
        </button>
  


        <button
          className="Nav_Section border-none"
          onClick={() => updateLocation(12.3297, 75.8013)} // Set latitude and longitude for Kodagu
        >
          Kodagu
        </button>
        <button
          className="Nav_Section"
          onClick={() => updateLocation( 13.0027, 76.0970)} // Example for other locations
        >
          Hassan
        </button>
        <button
          className="Nav_Section"
          onClick={() => updateLocation(12.2958, 76.6394)} // Example for Mysuru
        >
          Mysuru
        </button>
        <button className="Nav_Section" onClick={() => updateLocation(12.9141,  74.8560)}>
          Dakshina Kannada
        </button>
        <button className="Nav_Section" onClick={() => updateLocation(15.3647, 75.1292)}>
          Hubballi
        </button>
        <button className="Nav_Section" onClick={() => updateLocation(17.3235, 76.8325)}>
          Kalaburagi
        </button>
        <Link className="Nav_Section" to="/login">
         Log-out
        </Link>
      </div>

      <MiddleSection />
      {/* Error Message */}
      {error && <h4 className="text-center fw-bold text-danger mt-5">404 Error: Page Not Found on Our Server</h4>}
      <Outlet />
    </div>
  );
};

export default Home;
