import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [folders, setFolders] = useState(['English', 'Urdu', 'Math']);
  const [newFolder, setNewFolder] = useState('');

  const addFolder = () => {
    if (newFolder.trim() !== '' && !folders.includes(newFolder)) {
      setFolders([...folders, newFolder]);
      setNewFolder('');
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Subject Folders</h2>
      <ul>
        {folders.map((folder, index) => (
          <li key={index}>
            <Link to={`/folder/${folder.toLowerCase()}`}>📁 {folder}</Link>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="New folder name"
        value={newFolder}
        onChange={(e) => setNewFolder(e.target.value)}
      />
      <button onClick={addFolder}>Add Folder</button>
    </div>
  );
}

export default Home;
