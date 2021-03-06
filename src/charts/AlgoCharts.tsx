import React, { useState } from 'react';
import { CognitoUser } from 'amazon-cognito-identity-js';
import AlgoBlockData from './AlgoBlockData';
import UserPool from '../services/UserPool';

const AlgoCharts = () => {

    let email_address;

    if(sessionStorage.getItem("email")){
        email_address = sessionStorage.getItem("email");
    }    

    // const logout = () => {

    //     let userData = {
    //         Username: email,
    //         Pool: UserPool
    //     }

    //     let cognitoUser = new CognitoUser(userData);

    //     cognitoUser.signOut();

    //     navigate("/login");

    // } 

    const [isLoading, setIsLoading] = React.useState(true);
    const [algoRoundData, setAlgoRoundData] = React.useState();
    // const [algoTxnData, setAlgoTxnData] = React.useState();

    React.useEffect(() => {
        const url = "https://algoindexer.algoexplorerapi.io/health";
        fetch(url)
            .then((response) => response.json())
            .then((json) => setAlgoRoundData(json))
            .catch((error) => console.log(error)); 
    },[]);

    React.useEffect(() => {
        if(algoRoundData) {
            setIsLoading(false);
            const algoRound = algoRoundData["round"];
            console.log(algoRound);
            // let url2 = "https://algoindexer.algoexplorerapi.io/v2/blocks/" + algoRound;
            // fetch(url2)
            //     .then((response) => response.json())
            //     .then((json) => setAlgoRoundData(json))
            //     .catch((error) => console.log(error));
        }  
    },[algoRoundData]);

    return (
        <React.Fragment>
            <h1>Welcome, { email_address }, to React Algo Charts!</h1>
            <div>
                {isLoading ? (
                        <h1>Loading...</h1>
                    ): (
                        <AlgoBlockData {...algoRoundData} />
                    )
                }              
            </div>            
        </React.Fragment>
    );
};

export default AlgoCharts