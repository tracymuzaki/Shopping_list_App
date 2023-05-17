import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Nav.css';

export function NavBar() {
  return (
    <>
    <div className='over'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <div className='btns'>
          <li><Link to="login" className='nav-btn2'>LogIn</Link></li>
          <li><Link to="register" className='nav-btn2'>SignUp</Link></li>
        </div>
      </ul>
        <Outlet />
    </div>
    </>
  )
}