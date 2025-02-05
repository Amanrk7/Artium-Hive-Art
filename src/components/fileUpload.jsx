import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

export const FileUpload = ({ onFilesSelected }) => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFilesSelected(e.dataTransfer.files);
    }
  };

  return (
    <div
      className={`upload-container ${dragActive ? "drag-active" : ""}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={(e) => onFilesSelected(e.target.files)}
        ref={inputRef}
        hidden
      />
      <div className="upload-content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
        <p id="drag-n-drop">
          Drag n Drop here <hr /> or{" "}
          <button
            id="browse-files-btn"
            onClick={() => inputRef.current.click()}
          >
            Browse
          </button>
        </p>
        <small>Supports: JPEG, PNG (Max 10MB)</small>
      </div>
    </div>
  );
};

FileUpload.propTypes = {
  onFilesSelected: PropTypes.func.isRequired,
};
