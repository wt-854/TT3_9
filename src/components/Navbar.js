import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import img1 from '../components/images/dbslogo.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/Home' className='navbar-logo' onClick={closeMobileMenu}>
            {/* <i class='fab fa-typo3' /> */}
            <img class='fa-typo3' src={img1} style={{width:100, marginTop: -7}} alt=""/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/cashwallet'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Cash Wallet
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/transaction'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Transaction History
              </Link>
            </li>

            <li>
              <Link
                to='/'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Log Out
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Log Out</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;