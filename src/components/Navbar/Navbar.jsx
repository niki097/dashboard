import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineDashboard } from "react-icons/md";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> {/* Link to Home */}
      <Link to="/dashscreen">DashScreen</Link> {/* Link to About */}
    </nav>
  );
}

export default Navbar;
