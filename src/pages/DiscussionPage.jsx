import React, { useState } from "react";

const DiscussionPage = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);

  const handlePostComment = () => {
    if (name && message) {
      const newComment = { name, message };
      setComments([...comments, newComment]);
      setName("");
      setMessage("");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Comments ({comments.length})</h2>
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.textarea}
        />
        <button onClick={handlePostComment} style={styles.button}>
          Post Comment
        </button>
      </div>
      <div style={styles.comments}>
        {comments.map((comment, index) => (
          <div key={index} style={styles.comment}>
            <strong>{comment.name}</strong>
            <p>{comment.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: "260px", maxWidth: "800px", margin: "-200px auto" },
  form: { marginBottom: "177px" },
  input: { width: "100%", padding: "10px", marginBottom: "10px" },
  textarea: {
    width: "100%",
    padding: "10px",
    height: "100px",
    marginBottom: "10px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#6a11cb",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  comments: { marginTop: "20px" },
  comment: { borderBottom: "1px solid #ccc", padding: "20px 0" },
};

export default DiscussionPage;
