import React from 'react';
import { useNavigate } from 'react-router-dom';

const folders = [
  { name: "Math", description: "Formulas & Questions" },
  { name: "Biology", description: "Diagrams & Notes" },
  { name: "Computer", description: "Programs & Theory" }
];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center text-light fw-bold">📚 SmartDesk Folders</h2>

      <div className="row">
        {folders.map((folder, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <div className="card smart-card h-100">
              <div className="card-body">
                <h5 className="card-title">{folder.name}</h5>
                <p className="card-text">{folder.description}</p>
                <button
                  className="btn btn-custom w-100"
                  onClick={() => navigate(`/folder/${folder.name}`)}
                >
                  Open Folder
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-success px-4">+ Create New Folder</button>
      </div>
    </div>
  );
}

export default Home;
