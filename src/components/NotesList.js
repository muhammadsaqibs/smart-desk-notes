import React from 'react';

function NotesList({ notes, files }) {
  return (
    <div>
      <h3>📝 Notes</h3>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>🗒️ {note}</li>
        ))}
      </ul>

      <h3>📄 Files</h3>
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            {file.type.includes('image') ? (
              <img src={file.dataUrl} alt={file.name} style={{ width: '100px' }} />
            ) : (
              <a href={file.dataUrl} download={file.name}>{file.name}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotesList;
