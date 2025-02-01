import React from "react";

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <h3>Video Activity</h3>
      <ul>
        <li>Playlist 1</li>
        <li>Playlist 2</li>
        <li>Playlist 3</li>
      </ul>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: "200px",
    padding: "10px",
    borderRight: "1px solid #ccc",
  },
};

export default Sidebar;
