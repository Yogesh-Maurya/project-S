import React from 'react';

const SignupPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.logo}>LOGO COMPANY</div>
      <div style={styles.signupBox}>
        <h2>Sign up</h2>
        <p>Sign up to continue</p>
        <form style={styles.form}>
          <input type="text" placeholder="Name" style={styles.input} />
          <input type="email" placeholder="Email" style={styles.input} />
          <input type="password" placeholder="Password" style={styles.input} />
          <button type="submit" style={styles.signupButton}>Sign up</button>
          <label style={styles.checkboxLabel}>
            <input type="checkbox" />
            Remember me
          </label>
        </form>
        <div style={styles.quickAccess}>
          <p>ACCESS QUICKLY</p>
          <button style={styles.socialButton}>Google</button>
          <button style={styles.socialButton}>LinkedIn</button>
          <button style={styles.socialButton}>SSO</button>
        </div>
        <p>Already have an account? <a href="/login">Sign in</a></p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
  },
  logo: {
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  signupBox: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '400px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  signupButton: {
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '14px',
  },
  quickAccess: {
    marginBottom: '20px',
  },
  socialButton: {
    margin: '5px',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: '#f3f3f3',
    cursor: 'pointer',
  },
};

export default SignupPage; 