import React from "react";

const YouTubeVideo = () => {
  return (
    <div style={styles.videoContainer}>
      <h3 style={styles.title}>YouTube</h3>
      <a
        href="https://youtu.be/czMUlsMduyE?feature=shared"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.videoLink}
      >
        <div style={styles.video}>[YouTube Video]</div>
      </a>
      <div style={styles.discussion}>Discussion</div>
    </div>
  );
};

const styles = {
  videoContainer: {
    flex: 1,
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "1080px",
    margin: "20px auto",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  videoLink: {
    textDecoration: "none",
    color: "inherit",
    width: "100%",
  },
  video: {
    height: "315px",
    width: "100%",
    backgroundColor: "#ddd",
    marginBottom: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
  },
  discussion: {
    padding: "15px",
    border: "1px solid #ccc",
    width: "100%",
    maxWidth: "600px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
};

export default YouTubeVideo;
