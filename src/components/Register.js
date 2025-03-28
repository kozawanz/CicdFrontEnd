import React, {useState} from 'react';
import {BaseUrl} from "../constants";
import axios from "axios";
import "../App.css";

function Register(props) {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [Err, setErr] = useState("")

    function usernameChangeHandler(event) {
        setUsername(event.target.value)
    }

    function emailChangeHandler(event) {
        setEmail(event.target.value)
    }

    function passwordChangeHandler(event) {
        setPassword(event.target.value)
    }

    function register(event) {
        if(username === "" || email === "" || password === "") {
            setErr("All fields are required")
        }
        else {
            let data = JSON.stringify({
              "username": username,
              "email": email,
              "password": password
            });

            let config = {
              method: 'post',
              maxBodyLength: Infinity,
              url: BaseUrl+'/api/register/',
              headers: {
                'Content-Type': 'application/json'
              },
              data : data
            };

            axios.request(config)
            .then((response) => {
              console.log(JSON.stringify(response.data));
              setErr("Register Successful");
            })
            .catch((error) => {
              console.log(error);
              setErr(error.response.data);
            });
        }
    }

    return (
        <div className="container content-box">
          <h1>Register</h1>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={() => register(username, email, password)}>Register</button>
          <p>{Err}</p>
        </div>
    );
}

export default Register;