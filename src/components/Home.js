import React from 'react';
import {Link} from "react-router-dom";
import "../App.css";

function Home(props) {
    return (
         <div className="container">
          {/* Navigation Bar */}
          <nav className="navbar">
            <h1 className="logo">TODO App</h1>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/noteform">Create Note</Link></li>
            </ul>
          </nav>

          {/* Main Content */}
          <div className="content-box">
            <h2>Welcome to the TODO App</h2>
            <p>Manage your tasks efficiently with our simple note system.</p>
          </div>
        </div>
    );
}

export default Home;