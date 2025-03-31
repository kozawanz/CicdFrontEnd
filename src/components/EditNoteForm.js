// src/components/EditNoteForm.js
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {BaseUrl} from "../constants";

const EditNoteForm = () => {
    const {id} = useParams(); // Get the note ID from the URL params
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [Err, setErr] = useState()

    useEffect(() => {
        const fetchNote = async () => {

            const token = localStorage.getItem('Token');
            try {
                // Correct template literal syntax for URL
                const response = await axios.get(BaseUrl+'/api/update/' + id, {
                    headers: {
                        'Authorization': 'Token ' + token
                    }

                });
                setTitle(response.data.title);
                setContent(response.data.content);
            } catch (error) {
                alert(error.response.data);
            }
        };
        fetchNote();
    }, [id]); // Fetch the note whenever the id changes

    const handleSubmit = async (e) => {
        e.preventDefault();
         try {
            const token = localStorage.getItem('Token');
            await axios.put(`${BaseUrl}/api/update/${id}/`, { title, content }, {
                headers: { 'Authorization': `Token ${token}` }
            });
            alert('Note updated successfully');
            window.location.href = "/notelist"; // Redirect back to notes list
        } catch (error) {
            console.error("Error updating note:", error);
            alert('Failed to update note');
        }
    };

    return (
        <div className="container content-box">
            <h2>Edit Note</h2>
            <form onSubmit={handleSubmit} className="edit-form">
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
                <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required />
                <button type="submit" className="save-btn">Update Note</button>
            </form>
        </div>
    );
};

export default EditNoteForm;
