import React, {useState} from 'react';
import {BaseUrl} from "../constants";
import axios from "axios";

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
        <div>
            <h1>Register</h1>
            <p>Username: <input type="text" value={username} onChange={usernameChangeHandler} /> </p>
            <p>Email: <input type="text" value={email} onChange={emailChangeHandler} /> </p>
            <p>Password: <input type="password" value={password} onChange={passwordChangeHandler} /> </p>
            <button onClick={register}>Register</button>
            <p>{Err}</p>
        </div>
    );
}

export default Register;