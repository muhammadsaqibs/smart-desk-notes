import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
  {/* <nav style={{ padding: '1rem', backgroundColor: '#282c34', color: 'white' }}>
      <h2><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>SmartDesk Notes App For Students</Link></h2>
        <h2><Link to="/About" style={{ color: 'white', textDecoration: 'none' }}>About</Link></h2>
    </nav>*/}
  <nav className="navbar bg-body-tertiary " tyle={{ margin:'0rem'}} >
  <div className="container-fluid" style={{ padding: '1rem', backgroundColor: '#282c34', color: 'white' }}>
   <h1 > <Link className="navbar-brand" to="/" style={{ color: 'white', textDecoration: 'none' }}>Smart Desk App</Link></h1>
       <h4><Link to="/About" style={{ color: 'white', textDecoration: 'none' }}>About</Link></h4>
  </div>
</nav>
    </>
  );
}

export default Navbar;
