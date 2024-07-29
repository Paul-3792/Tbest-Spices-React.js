import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className="banner" id="home">
      <Navbar />
      <div className='banner__content'>
        <div className="container-fluid">
            <div className='banner__text col-6 p-0 pt-4 pb-4'>
                <h1>Welcome to Tbest Spices</h1>
                <div className='banner__btn'>
                    <a href="#spices" className="btn-smart">
                        Get Started
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
