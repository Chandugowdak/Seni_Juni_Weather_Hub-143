import React from 'react';
import Login from './Entry_Pages/Login';
import Registration from './Entry_Pages/Registration';
import {Routes,Route} from 'react-router-dom'
import LinkerPage from './Entry_Pages/LinkerPage';
import Home from './Middle_Page/Middle_First_Section/Home';
import Fetch from './Middle_Page/Middle_Second_Section/Fetch';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Hassan from './Search_Section/Hassan';
import Benglor from './Search_Section/Benglor';

import BioDiversity from './Menu_Section/BioDiverstiy';
import Pollution from './Menu_Section/Pollution';
import PrivatePolicy from './Menu_Section/PrivatePolicy';
import WeatherNews from './Menu_Section/TeslaWeather';
import Hoverly from './Middle_Page/Middle_Second_Section/Hoverly';
import Daily from './Middle_Page/Middle_Second_Section/Daily';
import Predicted  from './Middle_Page/Middle_Second_Section/Predicted';
import AirQuality from './Middle_Page/Middle_Second_Section/AirQuality';
import CoorgFetchAPI from './Menu_Section/DifferentPlace1.jsx/CoorgFetchAPI';
import Montley from './Middle_Page/Middle_Second_Section/Montley';

const App = ()=>{
  return(
    <div>
      
      <LinkerPage />
     
        <Routes>
          <Route exact  path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/" element={<Home/>}>
          <Route path="/Fet" element={<Fetch />} />
          <Route path="/hassan" element={<Hassan />} />
          <Route path="/Beng" element={<Benglor />} />
          <Route path='/Coorg' element={<CoorgFetchAPI />}/>
          <Route path="/hoverly" element={<Hoverly />} />
          <Route path="/Daily" element={<Daily />} />
          <Route path="/Pred" element={<Predicted />} />
          <Route path="/Bio" element={<BioDiversity />} />
          <Route path="/Pollut" element={<Pollution />} />
          <Route path="/Private" element={<PrivatePolicy />} />
          <Route path="/Weather" element={<WeatherNews />} />
          {/* <Route path="/Air_Qu" element={<AirQuality />} /> */}
          <Route path="/Air_Qu" element={<Montley/>}/>
          </Route>
        </Routes>
      

    </div>
  )
}
export  default App;



