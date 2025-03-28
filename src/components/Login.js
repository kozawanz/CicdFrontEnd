import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BaseUrl} from "../constants";

function Login(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [Err, setErr] = useState("")

    useEffect(() => {
        if(localStorage.getItem("Token") !== null) {
            window.location.href = "/logout";
        }
    }, []);


    function usernameChangeHandler(event) {
        setUsername(event.target.value)
    }

    function passwordChangeHandler(event) {
        setPassword(event.target.value)
    }

    function login(event) {
        let data = JSON.stringify({
          "username": username,
          "password": password
        });

        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: BaseUrl+'/api/login/',
          headers: {
            'Content-Type': 'application/json'
          },
          data : data
        };

        axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          localStorage.setItem("Token", response.data.token);
          setErr("Login Successful");
        })
        .catch((error) => {
          console.log(error);
          setErr(error.response.data);
        });
    }

    return (
        <div>
            <h1>Login</h1>
            <p>Username: <input type="text" value={username} onChange={usernameChangeHandler} /> </p>
            <p>Password: <input type="password" value={password} onChange={passwordChangeHandler} /> </p>
            <button onClick={login}>Login</button>
            <p>{Err}</p>
        </div>
    );
}

export default Login;