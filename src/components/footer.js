import React from 'react';
import './footer.css';
import { Button } from './Button.js';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdCoronavirus } from 'react-icons/md';
import sendEmail from '../components/emailSender.js';


function Footer() {




 








  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          If u want weekly covid news!
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form onSubmit={sendEmail}>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
  
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
       
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdCoronavirus className='navbar-icon' />
              Corona Map
            </Link>
          </div>
          <small className='website-rights'>Cpex © 2020</small>
          <div className='social-icons'>
            <a
              className='social-icon-link'
              href='https://www.facebook.com/'
              target='_blank'
              aria-label='Facebook'
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              className='social-icon-link'
              href='https://www.instagram.com/'
              target='_blank'
              aria-label='Instagram'
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              className='social-icon-link'
              href=
                'https://www.youtube.com/'
              
              target='_blank'
              aria-label='Youtube'
              rel="noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              className='social-icon-link'
              href='https://twitter.com/home'
              target='_blank'
              aria-label='Twitter'
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              className='social-icon-link'
              href='https://nl.linkedin.com/'
              target='_blank'
              rel="noreferrer"
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;