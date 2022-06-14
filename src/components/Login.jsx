import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CognitoUser, CognitoUserAttributes, CognitoUserPool, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from '../services/UserPool';
import './Login.css';
// import * from AWS as 'aws-sdk/global';

const Login = () => {

    let navigate = useNavigate();

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    let errorMsg;

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
                
                cognitoUser.getUserAttributes(function(err, result){
                    if(err) {
                        alert( err.message || JSON.stringify(err));
                    }

                    if(result[2].getName()==="email") {
                        console.log('EMAIL USERNAME: ' + result[2].getValue());

                        if(typeof(Storage)!=="undefined"){
                            sessionStorage.setItem("email", result[2].getValue());
                        } else {

                        }                        
                    }                    
                });

                navigate("/");
            },
            onFailure: function(err) {
                errorMsg = err.message || JSON.stringify(err);
                console.log(errorMsg)
                document.getElementById("form_error").innerHTML = errorMsg;
                // alert(err.message || JSON.stringify(err))
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

                <span id="form_error" className="errors">{ errorMsg }</span>

                <button className="sub" type="submit">Login</button>
                <Link to="/signup"><button className="subs">Signup</button></Link>
            </form>
        </React.Fragment>        
    );

};

export default Login;