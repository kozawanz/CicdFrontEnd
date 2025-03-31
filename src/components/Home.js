import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import "../App.css";

function Home(props) {
    const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("Token"));
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome to Your TODO App</h1>
      <p>Organize your tasks efficiently and never forget anything important!</p>
      <div className="cta-buttons">
        {token ? (
          <p>You are logged in. Start managing your tasks!</p>
        ) : (
          <>
            <Link to="/register" className="btn btn-primary">Get Started</Link>
            <Link to="/login" className="btn btn-secondary">Login</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;