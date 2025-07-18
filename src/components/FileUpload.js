import React from 'react';

function FileUpload({ onFileUpload }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      onFileUpload({
        name: file.name,
        type: file.type,
        dataUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" accept="image/*,.pdf" onChange={handleFileChange} />
    </div>
  );
}

export default FileUpload;
