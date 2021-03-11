import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className='navbar  navbar-expand-lg navbar-light bg-primary d-flex  '>
        <Link to='/' className='navbar-brand text-white ml-5'>
          Contact List
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav ml-auto '>
            <Link to='/addcontact'>
              <button className='btn btn-light mr-5'>Create Contact</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
