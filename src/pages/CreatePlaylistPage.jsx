import React, { useState } from "react";
import "./CreatePlaylistPage.css"; // Create this CSS file for styling

const CreatePlaylistPage = () => {
  const [playlistTitle, setPlaylistTitle] = useState("");
  const [videos, setVideos] = useState([
    { link: "", title: "", description: "" },
  ]);

  const handleAddVideo = () => {
    setVideos([...videos, { link: "", title: "", description: "" }]);
  };

  const handleRemoveVideo = (index) => {
    const newVideos = videos.filter((_, i) => i !== index);
    setVideos(newVideos);
  };

  const handleInputChange = (index, field, value) => {
    const newVideos = [...videos];
    newVideos[index][field] = value;
    setVideos(newVideos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Creating playlist:", { playlistTitle, videos });
  };

  return (
    <div className="playlist-container">
      <h1>Create Playlist</h1>
      <form onSubmit={handleSubmit} className="playlist-form">
        <label>Playlist Title</label>
        <input
          type="text"
          value={playlistTitle}
          onChange={(e) => setPlaylistTitle(e.target.value)}
          placeholder="Enter playlist title"
          required
        />
        <h2>Videos</h2>
        {videos.map((video, index) => (
          <div key={index} className="video-section">
            <h3>Video {index + 1}</h3>
            <label>Video Link</label>
            <input
              type="url"
              value={video.link}
              onChange={(e) => handleInputChange(index, "link", e.target.value)}
              placeholder="Enter video URL"
              required
            />
            <label>Video Title</label>
            <input
              type="text"
              value={video.title}
              onChange={(e) =>
                handleInputChange(index, "title", e.target.value)
              }
              placeholder="Enter video title"
              required
            />
            <label>Description</label>
            <textarea
              value={video.description}
              onChange={(e) =>
                handleInputChange(index, "description", e.target.value)
              }
              placeholder="Enter video description"
            ></textarea>
            <button
              type="button"
              onClick={() => handleRemoveVideo(index)}
              className="remove-video-button"
            >
              Remove Video
            </button>
          </div>
        ))}
        {videos.length < 5 && ( // Example condition: max 5 videos
          <button
            type="button"
            onClick={handleAddVideo}
            className="add-video-button"
          >
            Add Another Video
          </button>
        )}
        <button type="submit" className="submit-playlist-button">
          Upload Playlist
        </button>
      </form>
    </div>
  );
};

export default CreatePlaylistPage;
