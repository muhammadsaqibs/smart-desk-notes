import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <nav style={{ padding: '1rem', backgroundColor: '#282c34', color: 'white' }}>
      <h2><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>SmartDesk Notes App For Students</Link></h2>
        <h2><Link to="/About" style={{ color: 'white', textDecoration: 'none' }}>About</Link></h2>
    </nav>
  
    </>
  );
}

export default Navbar;
