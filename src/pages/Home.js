import React from 'react';
import { useNavigate } from 'react-router-dom';

const folders = [
  { name: "Math", description: "Formulas & Questions" },
  { name: "Biology", description: "Diagrams & Notes" },
  { name: "Computer", description: "Programs & Theory" }
];

function Home({ darkMode }) {
  const navigate = useNavigate();

  return (
    <div className="container my-5">
      {/* Heading */}
      <h2 className={`mb-4 text-center fw-bold ${darkMode ? 'text-light' : 'text-dark'}`}>
        📚 SmartDesk Folders
      </h2>

      <div className="row">
        {folders.map((folder, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <div className={`card h-100 shadow ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`}>
              <div className="card-body">
                <h5 className="card-title">{folder.name}</h5>
                <p className="card-text">{folder.description}</p>
                <button
                  className={`btn w-100 ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'}`}
                  onClick={() => navigate(`/folder/${folder.name}`)}
                >
                  Open Folder
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Folder Button */}
      <div className="text-center mt-4">
        <button className="btn btn-success px-4">+ Create New Folder</button>
      </div>
    </div>
  );
}

export default Home;
