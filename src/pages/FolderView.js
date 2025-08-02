import React from 'react';
import { useParams } from 'react-router-dom';

const notes = [
  { title: "Chapter 1 - Algebra", content: "Algebra is a branch of mathematics..." },
  { title: "Important Formulas", content: "Area = πr², Pythagoras = a² + b² = c²" }
];

function FolderView({ darkMode }) {
  const { folderName } = useParams();

  return (
    <div className="container my-5">
      {/* Heading color changes based on mode */}
      <h3 className={`text-center fw-bold mb-4 ${darkMode ? 'text-light' : 'text-dark'}`}>
        📝 Notes in "{folderName}"
      </h3>

      <div className="row">
        {notes.map((note, i) => (
          <div className="col-md-6 mb-4" key={i}>
            <div className={`card h-100 shadow ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`}>
              <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-success mx-2">+ Add Note</button>
        <button className={`btn mx-2 ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'}`}>
          📁 Upload File
        </button>
      </div>
    </div>
  );
}

export default FolderView;
