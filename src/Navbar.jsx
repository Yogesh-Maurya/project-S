import React, { useState } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleContactClick = () => {
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  const handleUpload = () => {
    console.log("Uploading to YouTube channel...");
  };

  return (
    <nav style={styles.navbar}>
      {/* Mobile menu button */}
      <button 
        style={styles.mobileMenuButton}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <i className="fas fa-bars"></i>
      </button>

      <div style={styles.leftSection}>
        <div style={styles.logo}>Desi 🔧Fix</div>
        
        <div style={{
          ...styles.navGroup,
          ...(isMobileMenuOpen ? styles.navGroupMobileOpen : styles.navGroupMobileClosed)
        }}>
          <button style={styles.navButton}>
            <i className="fas fa-home" style={styles.icon}></i>
            <span style={styles.buttonText}>Home</span>
          </button>
          <button style={styles.navButton}>
            <i className="fas fa-comments" style={styles.icon}></i>
            <span style={styles.buttonText}>Discussion</span>
          </button>
          <button style={styles.uploadButton} onClick={handleUpload}>
            <i className="fas fa-upload" style={styles.icon}></i>
            <span style={styles.buttonText}>Upload</span>
          </button>
          <button style={styles.contactButton} onClick={handleContactClick}>
            <i className="fas fa-envelope" style={styles.icon}></i>
            <span style={styles.buttonText}>Contact</span>
          </button>
        </div>
      </div>

      <div style={styles.rightSection}>
        <div style={styles.searchContainer}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            placeholder="Search courses..."
            style={{
              ...styles.searchInput,
              ...(isSearchFocused && styles.searchInputFocused),
            }}
          />
          <button style={styles.goButton} onClick={handleSearch}>
            Go
          </button>
        </div>

        <div style={styles.profileContainer}>
          <button 
            style={styles.profileButton} 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <i className="fas fa-user" style={styles.icon}></i>
            <i className="fas fa-chevron-down" style={styles.icon}></i>
          </button>
          
          {isProfileOpen && (
            <div style={styles.dropdown}>
              <button style={styles.dropdownItem}>
                <i className="fas fa-user-circle" style={styles.dropdownIcon}></i>
                Profile
              </button>
              <button style={styles.dropdownItem}>
                <i className="fas fa-cog" style={styles.dropdownIcon}></i>
                Settings
              </button>
              <div style={styles.dropdownDivider} />
              <button style={styles.dropdownItem}>
                <i className="fas fa-sign-out-alt" style={styles.dropdownIcon}></i>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 20px",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
    zIndex: 1000,
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
    minHeight: "60px",
    boxSizing: "border-box",
  },
  leftSection: {
    display: "flex",
    alignItems: "center",
    gap: "32px",
    flex: "1 1 auto",
    "@media (max-width: 768px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    "@media (max-width: 768px)": {
      width: "100%",
      justifyContent: "flex-end",
    },
  },
  logo: {
    color: "#fff",
    fontSize: "28px",
    fontWeight: "700",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
    background: "linear-gradient(45deg, #fff, #e0e7ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    whiteSpace: "nowrap",
  },
  navGroup: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    flexWrap: "wrap",
  },
  navGroupMobileClosed: {
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  navGroupMobileOpen: {
    "@media (max-width: 768px)": {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      position: "absolute",
      top: "60px",
      left: 0,
      background: "#2563eb",
      padding: "16px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
  },
  mobileMenuButton: {
    display: "none",
    "@media (max-width: 768px)": {
      display: "block",
      padding: "8px",
      background: "none",
      border: "none",
      color: "#fff",
      fontSize: "24px",
      cursor: "pointer",
    },
  },
  navButton: {
    padding: "8px 16px",
    border: "none",
    background: "rgba(255, 255, 255, 0.1)",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "all 0.3s ease",
    whiteSpace: "nowrap",
    "@media (max-width: 768px)": {
      width: "100%",
    },
  },
  uploadButton: {
    padding: "8px 16px",
    border: "none",
    background: "linear-gradient(45deg, #4f46e5, #6366f1)",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    boxShadow: "0 2px 8px rgba(79, 70, 229, 0.3)",
    transition: "all 0.3s ease",
    whiteSpace: "nowrap",
    "@media (max-width: 768px)": {
      width: "100%",
    },
  },
  searchContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    "@media (max-width: 1024px)": {
      width: "auto",
    },
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  searchInput: {
    padding: "8px 16px",
    borderRadius: "8px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    outline: "none",
    width: "200px",
    fontSize: "14px",
    background: "rgba(255, 255, 255, 0.1)",
    color: "#fff",
    transition: "all 0.3s ease",
    "@media (max-width: 1024px)": {
      width: "160px",
    },
  },
  searchInputFocused: {
    background: "rgba(255, 255, 255, 0.2)",
    borderColor: "rgba(255, 255, 255, 0.4)",
    boxShadow: "0 0 12px rgba(255, 255, 255, 0.1)",
  },
  goButton: {
    padding: "8px 16px",
    background: "rgba(255, 255, 255, 0.2)",
    border: "none",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
    transition: "all 0.3s ease",
    whiteSpace: "nowrap",
  },
  contactButton: {
    padding: "8px 16px",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    background: "transparent",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    whiteSpace: "nowrap",
    "@media (max-width: 768px)": {
      width: "100%",
    },
  },
  profileContainer: {
    position: "relative",
    marginLeft: "auto",
  },
  profileButton: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    padding: "8px",
    background: "rgba(255, 255, 255, 0.1)",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    right: 0,
    marginTop: "8px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    minWidth: "160px",
    padding: "8px 0",
    zIndex: 1001,
  },
  dropdownItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    width: "100%",
    padding: "8px 16px",
    border: "none",
    background: "none",
    color: "#374151",
    fontSize: "14px",
    textAlign: "left",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    "&:hover": {
      background: "#f3f4f6",
    },
  },
  dropdownDivider: {
    height: "1px",
    background: "#e5e7eb",
    margin: "8px 0",
  },
  icon: {
    fontSize: "16px",
  },
  dropdownIcon: {
    fontSize: "14px",
    width: "16px",
  },
  buttonText: {
    "@media (max-width: 1024px)": {
      display: "none",
    },
    "@media (max-width: 768px)": {
      display: "inline",
    },
  },
};

export default Navbar;