import React, { useState } from 'react';
import './SignUp.css';
import UserPool from '../services/UserPool';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        UserPool.signUp(email, password, [], null, (err, data) => {
            
            if (err) {
                console.error(err);
            }

            console.log(data);
            let output = data;

            console.log("Cognito username after signup: " + output.user.username);
            // window.location("/");
            navigate("/login");
        });
    }

    return (
        <React.Fragment>
            <h1>Sign Up</h1>
            <form onSubmit={onSubmit}>
                <div className="block">
                    <label htmlFor="email">Email</label>
                    <input
                        className="fields"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    ></input>
                </div>
                <div className="block">
                    <label htmlFor="password">Password</label>
                    <input
                        className="fields"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    ></input>
                </div>
                
                <button className="sub" type="submit">Submit</button>
            </form>

            {}
        </React.Fragment>
    )
};

export default Signup;