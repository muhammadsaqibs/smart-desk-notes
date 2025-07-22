import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark shadow-sm px-4">
      <div className="container-fluid">
        <Link className="navbar-brand fs-4 text-warning" to="/">
          🧠 SmartDesk
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
