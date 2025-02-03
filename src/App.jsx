import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import YouTubeVideo from "./YouTubeVideo";
import UploadPage from './pages/UploadPage';
import CreatePlaylistPage from './pages/CreatePlaylistPage';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div style={styles.mainContent}>
              <Sidebar />
              <YouTubeVideo />
            </div>
          }
        />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/create-playlist" element={<CreatePlaylistPage />} />
      </Routes>
    </div>
  );
};

const styles = {
  mainContent: {
    display: "flex",
  },
};

export default App;