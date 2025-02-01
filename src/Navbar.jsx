import React, { useState } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleContactClick = () => {
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // Implement search logic here
  };

  const handleUpload = () => {
    console.log("Uploading to YouTube channel...");
    // Implement upload logic here
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Logo</div>
      <div style={styles.navItems}>
        <button
          style={styles.button}
          onClick={() => console.log("Home clicked")}
        >
          Home
        </button>
        <button
          style={styles.button}
          onClick={() => console.log("Discussion clicked")}
        >
          Discussion
        </button>
        <button style={styles.button} onClick={handleUpload}>
          Upload
        </button>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          style={styles.searchInput}
        />
        <button style={styles.button} onClick={handleSearch}>
          Search
        </button>
        <button style={styles.button} onClick={handleContactClick}>
          Contact
        </button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between", // Space between the logo and navItems
    alignItems: "center", // Center vertically
    padding: "15px 20px",
    borderBottom: "2px solid #ddd",
    position: "fixed",
    top: 0,
    width: "100%",
    backgroundColor: "#fff",
    zIndex: 1000,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease-in-out",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "22px",
  },
  navItems: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    justifyContent: "center", // Center the nav items
    flex: 1, // This ensures the navItems will fill available space
  },
  button: {
    padding: "8px 15px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "bold",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  searchInput: {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
    transition: "border-color 0.3s ease",
    width: "200px",
  },
};

export default Navbar;
