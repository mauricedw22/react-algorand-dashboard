import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AccountContext } from './Account';
import AlgoLogo from '../assets/algorand_full_logo_white.png';
import './Navbar.css';

const Navbar = () => {

    let navigate = useNavigate();

    let [ isLoggedIn, setIsLoggedIn ] = useState(false);

    const { getSession, logout } = useContext(AccountContext);

    React.useEffect(() => {
        getSession()
            .then((session:string) => {
                console.log("Session: ", session);
                setIsLoggedIn(true);
            })
    },[]);

    // const logout = () => {

    //     let userData = {
    //         Username: email,
    //         Pool: UserPool
    //     }

    //     let cognitoUser = new CognitoUser(userData);

    //     cognitoUser.signOut();

    //     navigate("/login");

    // }    

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg shadow-lg py-2 bg-orange-400 relative flex items-center w-full justify-between">
                <div className="px-6">
                    <button className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-white hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContentY" aria-controls="navbarSupportedContentY" aria-expanded="false" aria-label="Toggle navigation">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                    </svg>
                    </button>
                    <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
                        <img className="logo" src={AlgoLogo} width="150" height="75" />
                        <ul className="navbar-nav mr-auto flex flex-row">
                            <li className="nav-item">
                                <Link to="/">
                                    <p className="nav-link pr-2 lg:px-2 py-2 text-white hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out">
                                        Home
                                    </p>
                                </Link>
                            </li>
                                
                                { isLoggedIn ? (

                                        <li onClick={logout} className="nav-item">
                                            <p className="nav-link pr-2 lg:px-2 py-2 text-white hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out">
                                                    Logout
                                            </p>                                            
                                        </li>

                                    ) : (

                                        <ul className="navbar-nav mr-auto flex flex-row">
                                            <li className="nav-item">
                                                <Link to="/signup">
                                                    <p className="nav-link pr-2 lg:px-2 py-2 text-white hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out">
                                                        Sign Up
                                                    </p>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link to="/login">
                                                    <p className="nav-link pr-2 lg:px-2 py-2 text-white hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out">
                                                        Login
                                                    </p>
                                                </Link>
                                            </li>
                                        </ul>                                        

                                    ) 
                                
                                }                              
                                
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>        
    );
} 

export default Navbar
