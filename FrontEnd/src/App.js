import React from 'react';
import Login from './Entry_Pages/Login';
import Registration from './Entry_Pages/Registration';
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom'
import LinkerPage from './Entry_Pages/LinkerPage';
import Home from './Middle_Page/Home';
import Fetch from './Middle_Page/Fetch';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Hassan from './Search_Section/Hassan';
import Benglor from './Search_Section/Benglor';
import Today_Weather from './Middle_Page/Today_Weather';
import BioDiversity from './Menu_Section/BioDiverstiy';
import Pollution from './Menu_Section/Pollution';
import PrivatePolicy from './Menu_Section/PrivatePolicy';
import WeatherNews from './Menu_Section/WeatherNewes';
import Hoverly from './Middle_Page/Hoverly';
import Daily from './Middle_Page/Daily';
import Predicted  from './Middle_Page/Predicted';

const App = ()=>{
  return(
    <div className=''>
      <Router>
      <LinkerPage/>
      
        <Switch>
       
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Registration}/>
          <Route path='/hom' component={Home}/>
          <Route path="/Fet" component={Fetch}/>
          <Route path='/hassan' component={Hassan}/>
          <Route path='/Beng' component={Benglor}/>
          <Route path="/Today" component={Today_Weather}/>
          <Route path="/hoverly" component={Hoverly}/>
          <Route path='/Daily' component={Daily}/>
          <Route path='/Pred' component={Predicted }/>
          <Route path='/Bio' component={BioDiversity}/>
          <Route path='/Pollut' component={Pollution}/>
          <Route path='/Private' component={PrivatePolicy}/>
          <Route path='/Weather' component={WeatherNews}/>
        </Switch>
      </Router>

    </div>
  )
}
export  default App;



