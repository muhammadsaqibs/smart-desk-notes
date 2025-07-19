// src/components/FolderList.js
import React from 'react';

const FolderList = ({ folders, onFolderSelect, selectedFolder }) => {
  return (
    <div className="folder-list">
      <h3>📁 Subject Folders</h3>
      <ul>
        {folders.map((folder, index) => (
          <li
            key={index}
            onClick={() => onFolderSelect(folder)}
            className={folder === selectedFolder ? 'active-folder' : ''}
          >
            {folder}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FolderList;
