import React from "react";

const YouTubeVideo = () => {
  return (
    <div style={styles.videoContainer}>
      <div style={styles.header}>
        <h3 style={styles.title}>Desi Video Tutorial</h3>
        <div style={styles.videoStats}>
          <span style={styles.statItem}>▶️ 1.2K views</span>
          <span style={styles.statItem}>📅 2 days ago</span>
        </div>
      </div>

      <div style={styles.videoWrapper}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/1fDRLFCc2l4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={styles.iframe}
        ></iframe>
      </div>

      <div style={styles.discussionSection}>
        <div style={styles.discussionHeader}>
          <h4 style={styles.discussionTitle}>
            <i className="fas fa-comments" style={styles.icon}></i>
            Discussion (24)
          </h4>
          <button style={styles.addCommentBtn}>
            <i className="fas fa-plus" style={styles.icon}></i>
            Add Comment
          </button>
        </div>

        <div style={styles.commentsContainer}>
          <div style={styles.comment}>
            <div style={styles.userAvatar}>JD</div>
            <div style={styles.commentContent}>
              <div style={styles.commentHeader}>
                <span style={styles.userName}>John Doe</span>
                <span style={styles.commentTime}>2 hours ago</span>
              </div>
              <p style={styles.commentText}>
                This tutorial was incredibly helpful! The explanations were
                clear and easy to follow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  videoContainer: {
    flex: 1,
    padding: "80px",
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
    maxWidth: "100%",
    margin: "16px auto",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    paddingBottom: "16px",
    borderBottom: "2px solid #f0f2f5",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#1a1a1a",
    margin: 0,
  },
  videoStats: {
    display: "flex",
    gap: "16px",
    color: "#606060",
    fontSize: "0.9rem",
  },
  statItem: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  videoWrapper: {
    position: "relative",
    paddingBottom: "56.25%", // 16:9 aspect ratio
    height: 0,
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "none",
  },
  discussionSection: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  discussionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  discussionTitle: {
    margin: 0,
    fontSize: "1.2rem",
    color: "#1a1a1a",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  addCommentBtn: {
    padding: "8px 16px",
    border: "none",
    borderRadius: "8px",
    background: "#2563eb",
    color: "white",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    transition: "background 0.2s ease",
  },
  commentsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  comment: {
    display: "flex",
    gap: "12px",
    padding: "16px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
  },
  userAvatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "#2563eb",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "500",
  },
  commentContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  commentHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userName: {
    fontWeight: "500",
    color: "#1a1a1a",
  },
  commentTime: {
    fontSize: "0.8rem",
    color: "#606060",
  },
  commentText: {
    margin: 0,
    color: "#404040",
    lineHeight: 1.5,
  },
  icon: {
    fontSize: "14px",
    background: "linear-gradient(45deg, #ff6b6b, #f06595)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
};

export default YouTubeVideo;
