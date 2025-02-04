import React from "react";

const SignupPage = () => {
  return (
    <div style={styles.container}>
      <h1>Sign Up</h1>
      <form style={styles.form}>
        <input type="text" placeholder="Name" style={styles.input} />
        <input type="email" placeholder="Email" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />
        <button type="submit" style={styles.button}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "344px",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "200px",
    height: "vh",
    background: "linear-gradient(135deg,rgb(87, 44, 133) 0%,rgb(66, 101, 161) 100%)",
    color: "#fff",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    width: "300px",
  },
  input: {
    padding: "10px",
    borderRadius: "28px",
    border: "none",
    outline: "none",
    fontSize: "6px",
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "#fff",
    color: "#2575fc",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default SignupPage;
