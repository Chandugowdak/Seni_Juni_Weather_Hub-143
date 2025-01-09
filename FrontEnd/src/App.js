import React,{useState} from 'react';
import Login from './Entry_Pages/Login';
import Registration from './Entry_Pages/Registration';
import {Routes,Route} from 'react-router-dom'
import LinkerPage from './Entry_Pages/LinkerPage';
import Home from './Middle_Page/Middle_First_Section/Home';
import { CreateContext } from './Context_Globel_Store/CreateContext';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Hassan from './Search_Section/Hassan';
import Benglor from './Search_Section/Benglor';

import BioDiversity from './Menu_Section/BioDiverstiy';
import Pollution from './Menu_Section/Pollution';
import PrivatePolicy from './Menu_Section/PrivatePolicy';
import WeatherNews from './Menu_Section/TeslaWeather';
import Hoverly from './Middle_Page/Middle_Second_Section/Hoverly';
import Predicted  from './Middle_Page/Middle_Second_Section/Predicted';
import AirQuality from './Middle_Page/Middle_Second_Section/AirQuality';
import CoorgFetchAPI from './Menu_Section/DifferentPlace1.jsx/CoorgFetchAPI';
import HealthActivity from './Middle_Page/Middle_Second_Section/HealthActivity';
import Feedback from './Feed_Back_Reciver/Feedback';

const App = ()=>{
 const [latitude, setLatitude] = useState(12.3051); // Default latitude
  const [longitude, setLongitude] = useState(75.7977); // Default longitude

  return(
    <div >
      
      <LinkerPage />
     
     <CreateContext.Provider value={{longitude, setLongitude,latitude, setLatitude}}>
        <Routes>
          <Route exact  path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/" element={<Home/>}>
         
          <Route path="/hassan" element={<Hassan />} />
          <Route path="/Beng" element={<Benglor />} />
          <Route path='/Coorg' element={<CoorgFetchAPI />}/>
          <Route path="/hoverly" element={<Hoverly />} />
          <Route path="/Pred" element={<Predicted />} />
          <Route path="/Bio" element={<BioDiversity />} />
          <Route path="/Pollut" element={<Pollution />} />
          <Route path="/Private" element={<PrivatePolicy />} />
          <Route path="/Weather" element={<WeatherNews />} />
          <Route path="/Air_Qu" element={<AirQuality />} />
          <Route path="/Heal_Act" element={<HealthActivity/>}/>
          <Route path="/Feedback" element={<Feedback/>}/>
          </Route>
        </Routes>
      
        </CreateContext.Provider>
        
    </div>
  )
}
export  default App;







