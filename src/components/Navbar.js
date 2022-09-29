import React, { useState } from 'react';
import Logo from '../assets/images/logo.png';

export const  Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav class="navbar container navbar-expand-lg navbar-light border-bottom border-secondary pb-3">
    <div className='col-8 w-75'>
      <img src={Logo} alt="logo" className="img-fluid ms-3 mt-3" style={{width:'150px'}}/>
    </div> 
      
      <button class="custom-toggler navbar-toggler w-25 border-0 mt-3" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span class="navbar-toggler-icon border-none"></span>
      </button>

      <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse w-25 mt-4`} id="navbarsExample09">
          <div className='w-100 text-center'>
           <a type='submit' className='text-decoration-none text-secondary'>Login</a>
           </div>
           <div className='w-100 text-center btn border-none rounded' style={{backgroundColor:'#FF8800'}}>
           <a type='submit' className='text-white text-decoration-none' >Sign Up</a>
        </div>
        </div>
    </nav>
  );
}
