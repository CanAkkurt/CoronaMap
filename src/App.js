
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthProvider";
import WereldMap from "./pages/worldMap.js";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import Footer from './components/footer';
import Info from './pages/info';
import LogIn from './pages/LogIn';
import UserInfo from './pages/userInfo';
import PrivateRoute from "./components/PrivateRoute";
import UserPrivatePage from './pages/userPrivatePage';






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
        <Route exact path='/user-info' element={<PrivateRoute role="admin"/>}>  
          <Route exact path='/user-info' element={<UserInfo/>}/>
        </Route>
        <Route path='/user' element={<UserPrivatePage/>}></Route>
        
          
        
      </Routes>
     <Footer />
    </Router>
   </AuthProvider>
  );
}




export default App;

