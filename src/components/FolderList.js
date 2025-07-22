import React from 'react';

const folders = [
  { name: "Math", description: "Formulas and practice notes" },
  { name: "Science", description: "Chapters & diagrams" },
  { name: "English", description: "Essays and vocab lists" }
];

function FolderList() {
  return (
    <div className="row">
      {folders.map((folder, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title">{folder.name}</h5>
              <p className="card-text">{folder.description}</p>
              <button className="btn btn-outline-primary w-100">Open</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FolderList;
