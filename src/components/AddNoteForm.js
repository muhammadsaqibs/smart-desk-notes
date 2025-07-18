import React, { useState } from 'react';

function AddNoteForm({ onAddNote }) {
  const [noteText, setNoteText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteText.trim() === '') return;
    onAddNote(noteText);
    setNoteText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Write your note..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        rows={4}
      />
      <br />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default AddNoteForm;
