import React, { createContext } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Pool from '../services/UserPool';

const AccountContext = createContext();

const Account = (props) => {

    const getSession = async() => {
        return await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();
            if (user) {
                user.getSession((err, session) => {
                    if(err) {
                        reject();
                    } else {
                        resolve(session);
                    }
                })
            } else {
                reject();
            }
        });
    };

    const authenticate = async (Username, Password) => {
        return await new Promise((resolve, reject) => {
            let authenticationData = {
                Username,
                Password
            }
        
            let authenticationDetails = new AuthenticationDetails(authenticationData);
        
            let userData = {
                Username,
                Pool
            }
        
            let cognitoUser = new CognitoUser(userData);
    
            cognitoUser.authenticateUser(authenticationDetails, {
                onSuccess: function(result) {
                    console.log("onSuccess: ", result);
                    resolve(result);
                },
                onFailure: function(err) {
                    console.error("Failed auth context: ", err);
                    reject(err);
                    // alert(err.message || JSON.stringify(err))
                },
            })
        })
    };

    const logout = () => {
        const user = Pool.getCurrentUser();
        if (user) {
            user.signOut();
            sessionStorage.removeItem("email");
            window.location.reload(false);
        } else {

        }
    };

    return (
        <AccountContext.Provider value={{ authenticate, getSession, logout }}>
            {props.children}
        </AccountContext.Provider>
    )
};

export { Account, AccountContext };


// cognitoUser.getUserAttributes(function(err, result){
//     if(err) {
//         alert( err.message || JSON.stringify(err));
//     }

//     if(result[2].getName()==="email") {
//         console.log('EMAIL USERNAME: ' + result[2].getValue());

//         if(typeof(Storage)!=="undefined"){
//             sessionStorage.setItem("email", result[2].getValue());
//         } else {

//         }                        
//     }                    
// });