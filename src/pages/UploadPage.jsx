// src/pages/UploadPage.jsx
import React from "react";
import "./UploadPage.css"; // Make sure to import your CSS file
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UploadPage = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleUpload = (e) => {
    e.preventDefault();
    console.log("Uploading video:", { title, link, description });
  };

  return (
    <div className="upload-container">
      <div className="button-group">
        <button className="upload-button" onClick={() => navigate("/upload")}>
          Upload Single Video
        </button>
        <button
          className="upload-button"
          onClick={() => navigate("/create-playlist")}
        >
          Create Playlist
        </button>
      </div>
      <form onSubmit={handleUpload} className="upload-form">
        <label>Video Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter video title"
          required
        />
        <label>Video Link</label>
        <input
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Enter video URL"
          required
        />
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter video description"
        ></textarea>
        <button type="submit" className="upload-button">
          Upload Video
        </button>
      </form>
    </div>
  );
};

export default UploadPage;
