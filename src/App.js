import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FolderView from './pages/FolderView';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Navbar darkMode={darkMode} toggleMode={toggleMode} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode}/>} />
        <Route path="/folder/:folderName" element={<FolderView darkMode={darkMode} />} />
      </Routes>
    </div>
  );
}

export default App;
