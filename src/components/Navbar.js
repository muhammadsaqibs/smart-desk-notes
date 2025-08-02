import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ darkMode, toggleMode }) {
  return (
    <nav className={`navbar shadow-sm px-4 ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand fs-4 ${darkMode ? 'text-warning' : 'text-primary'}`} to="/">
          🧠 SmartDesk
        </Link>

        <div className="form-check form-switch ms-auto">
          <input
            className="form-check-input"
            type="checkbox"
            id="themeSwitch"
            checked={darkMode}
            onChange={toggleMode}
          />
          <label className="form-check-label ms-2" htmlFor="themeSwitch">
            {darkMode ? '🌙 Dark' : '☀️ Light'}
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
