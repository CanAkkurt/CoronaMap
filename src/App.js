
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthProvider";
import WereldMap from "./pages/worldMap.js";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import Footer from './components/footer';
import Info from './pages/info';
import LogIn from './pages/LogIn';

// import Graph from "./belgium/dataVisualisation"
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";







function App() {
  

  
  return (
   <AuthProvider>
    <Router>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<WereldMap/>}/>
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/info' element={<Info/>} />
        <Route path='/log-in' element={<LogIn/>} />
      </Routes>
     <Footer />
    </Router>
   </AuthProvider>
  );
}




export default App;

