import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CognitoUser, CognitoUserAttributes, CognitoUserPool, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from '../services/UserPool';
// import * from AWS as 'aws-sdk/global';

const Login = () => {

    let navigate = useNavigate();

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    // User Login details from form
    let authenticationData = {
        Username: email,
        Password: password
    }

    let authenticationDetails = new AuthenticationDetails(authenticationData);

    let userData = {
        Username: email,
        Pool: UserPool
    }

    let cognitoUser = new CognitoUser(userData);

    const onLogin = (event) => {
        event.preventDefault();
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function(result) {
                console.log(result.getAccessToken().getJwtToken());
                navigate("/");
            },
            onFailure: function(err) {
                alert(err.message || JSON.stringify(err))
            },
        })
    }

    return (
        <React.Fragment>
            <h1>User Login</h1>
            <form onSubmit={onLogin}>
                <div className="block">
                    <label htmlFor="email">Email</label>
                    <input
                        className="fields"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    >
                    </input>
                </div>
                <div className="block">
                    <label htmlFor="password">Password</label>
                    <input
                        className="fields"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    >
                    </input>
                </div>

                <button className="sub" type="submit">Login</button>
            </form>
        </React.Fragment>        
    );

};

export default Login;