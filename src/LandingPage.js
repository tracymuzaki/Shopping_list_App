import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export function LandingPage() {
  return (
    <div className='landing-page'>
      <h2>Get started with my Shopping list app</h2>
      <p className='p1'>Plan for your shopping by storing all you need to get here. Sign up with us to keep track of your shopping list.</p>
      <div className='landing-btns'>
        <Link to='login' className='landing-btn shopping_list-link'>Shopping List</Link>
        <Link to='register' className='landing-btn form-link'>SignUp</Link>
      </div>
    </div>
  )
}