// src/components/NotesList.js
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {BaseUrl} from "../constants";

const NotesList = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("Token") == null) {
            window.location.href = "/";
        }
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: BaseUrl + '/api/notes/',
            headers: {
                'Authorization': 'Token ' + localStorage.getItem("Token")
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setNotes(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function handleEdit(noteId) {
        window.location.href = "/editnoteform/" + noteId;
    }

    return (
        <div className="container content-box">
            <h2>My Notes</h2>
            <ul className="notes-list">
                {notes.map(note => (
                    <li key={note.id} className="note-item">
                        <div className="note-content">
                            <h3>{note.title}</h3>
                            <p>{note.content}</p>
                        </div>
                        <div className="note-actions">
                            <button className="edit-btn" onClick={  () => handleEdit(note.id)}>Edit</button>
                            <button className="delete-btn">Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotesList;
