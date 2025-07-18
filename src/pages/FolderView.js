import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AddNoteForm from '../components/AddNoteForm';
import FileUpload from '../components/FileUpload';
import NotesList from '../components/NotesList';

function FolderView() {
  const { name } = useParams();
  const [notes, setNotes] = useState([]);
  const [files, setFiles] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const handleFileUpload = (newFile) => {
    setFiles([...files, newFile]);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>📁 {name.charAt(0).toUpperCase() + name.slice(1)} Folder</h2>

      <AddNoteForm onAddNote={handleAddNote} />
      <FileUpload onFileUpload={handleFileUpload} />
      <NotesList notes={notes} files={files} />
    </div>
  );
}

export default FolderView;
