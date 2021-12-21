import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdCoronavirus } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {useLogout ,useSession } from '../contexts/AuthProvider';
import { useCallback } from 'react';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  const { isAuthed,user } = useSession();
   
   const logOut = useLogout();
   
   
   
  

   
  //  const handleLogOut = useCallback(async () => {
  //   await 
   
    
    
  // }, [logOut]);


  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  

   const onClick = () =>{
    
     logOut();
    //  closeMobileMenu();
   }

  useEffect(() => {

    showButton();
    window.addEventListener('resize', showButton,false);
    return () => {
      window.removeEventListener('resize', showButton, false)
    }
  }, []);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <MdCoronavirus className='navbar-icon' />
              Corona Map
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/user-info'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Settings
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/info'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  info
                </Link>
              </li>
              
              
              
              
              {!isAuthed ? (
              <li className='nav-btn'>
                {button ? (
                  <Link to='/sign-up' className='btn-link'>
                    <Button buttonStyle='btn--outline'>SIGN UP</Button>
                  </Link>
                ) : (
                  <Link to='/sign-up' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
              ):(<li></li>)}





              {isAuthed ? (    <li className='nav-btn'>
                {button ? (
                  <Link to='/log-in' className='btn-link'>
                    <Button buttonStyle='btn--outline'
                    
                    onClick={onClick}
                    > log Out</Button>
                    
                  </Link>
                ) : (
                  <Link to='/' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      Log out
                    </Button>
                  </Link>
                )}
              </li>):(   <li className='nav-btn'>
                {button ? (
                  <Link to='/log-in' className='btn-link'>
                    <Button buttonStyle='btn--outline'>Log in</Button>
                  </Link>
                ) : (
                  <Link to='/log-in' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      Log In
                    </Button>
                  </Link>
                )}
              </li>)}

          
              
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
