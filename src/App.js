import React, { useEffect } from "react" ;
import './App.css';
import MainPage from "./pages/mainPage.js";
import axios from "axios";
// import Graph from "./belgium/dataVisualisation"
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";







function App() {
  
//   useEffect(() => {
// const getCountries = async () => {
//   const response = await axios.get('http://localhost:3000/api/countries');
//   console.log(response);
// };
// getCountries();
// }, []);
  
  
  
  
  return (
    <div>
         
        <MainPage/>
    </div>
  );
}




export default App;

