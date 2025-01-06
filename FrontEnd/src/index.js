import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import{QueryClient,QueryClientProvider} from 'react-query'; //IMPORT THE REACT QUERY


import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient(); //CREATING THE OBJECT


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <QueryClientProvider client={queryClient}>
   <React.StrictMode>
  
    <App />
  
  </React.StrictMode>
  </QueryClientProvider>
  </BrowserRouter>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
