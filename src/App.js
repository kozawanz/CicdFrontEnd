import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import CreateNote from "./components/NoteForm";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import React, {useEffect, useState} from "react";
import EditNoteForm from "./components/EditNoteForm";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("Token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("Token");
    setToken(null);
    window.location.href = "/login";
  };
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <nav className="navbar">
            <h1 className="logo">TODO App</h1>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/noteform">Create Note</Link></li>
              {token ? (
                 <>
                    <li><a onClick={handleLogout} className="logout-btn">Logout</a></li>
                    <li><Link to="/notelist">My Notes</Link></li>
                </>
              ) : (
                <>
                  <li><Link to="/register">Register</Link></li>
                  <li><Link to="/login">Login</Link></li>
                </>
              )}
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/noteform" element={<NoteForm />} />
            <Route path="/notelist" element={<NoteList />} />
            <Route path="/editnoteform/:id" element={<EditNoteForm />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
