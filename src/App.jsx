import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import YouTubeVideo from "./YouTubeVideo";

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={styles.mainContent}>
        <Sidebar />
        <YouTubeVideo />
      </div>
    </div>
  );
};

const styles = {
  mainContent: {
    display: "flex",
  },
};

export default App;
