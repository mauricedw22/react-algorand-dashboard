import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AccountContext } from './Account';
import './Login.css';
// import * from AWS as 'aws-sdk/global';

const Login = () => {

    let navigate = useNavigate();

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const { authenticate } = useContext(AccountContext);

    const onLogin = (event) => {
        event.preventDefault();
        
        authenticate(email, password)
            .then((data) => {
                console.log("Successful Login:  ", data);
                sessionStorage.setItem("email", email);
                navigate("/");

                // To reload navbar with isLoggedIn state updated
                window.location.reload(false);
            })
            .catch((err) => {
                console.error("Failed to login: ", err);
            })
    };

    return (
        <React.Fragment>
            <h1>User Login</h1>
            <form onSubmit={onLogin}>
                <div className="block">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="fields"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    >
                    </input>
                </div>
                <div className="block">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="fields"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    >
                    </input>
                </div>

                <span className="form_error"></span>

                <button className="sub" type="submit">Login</button>
                <Link to="/signup"><button className="subs">Signup</button></Link>
            </form>
        </React.Fragment>        
    );

};

export default Login;