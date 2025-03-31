import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BaseUrl} from "../constants";
import "../App.css";

function Login(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [Err, setErr] = useState("")

    useEffect(() => {
        if(localStorage.getItem("Token") !== null) {
            window.location.href = "/";
        }
    }, []);


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
          window.location.href = "/";
        })
        .catch((error) => {
          console.log(error);
          setErr(error.response.data);
        });
    }

    return (
        <div className="container content-box">
          <h1>Login</h1>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={() => login(username, password)}>Login</button>
          <p>{Err}</p>
        </div>
    );
}

export default Login;