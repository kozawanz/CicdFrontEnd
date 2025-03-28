// src/components/NoteForm.js
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {BaseUrl} from "../constants";
import "../App.css";

const NoteForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    function handleSubmit(event) {
        event.preventDefault();
        let data = JSON.stringify({
            "title": title,
            "content": content
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: BaseUrl + '/api/create/',
            headers: {
                'Authorization': 'Token ' + localStorage.getItem("Token"),
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                alert("Created note successfully");
                setTitle('');
                setContent('');
            })
            .catch((error) => {
                console.log(error);
                alert(error.response.data);
            });
    }

    return (
        <div className="container content-box">
          <h1>Create Note</h1>
          <form onSubmit={(e) => handleSubmit(e, title, content)}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required />
            <button type="submit">Create Note</button>
          </form>
        </div>
    );
};

export default NoteForm;
