
import './App.css';
import MainPage from "./pages/mainPage.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import WereldMap from "./dataVis/worldMap.js";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import Footer from './components/footer';
// import Graph from "./belgium/dataVisualisation"
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";







function App() {
  

  
  return (
    <Router>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<WereldMap/>}/>
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
     <Footer />
    </Router>
    
  );
}




export default App;

