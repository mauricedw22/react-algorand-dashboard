import React from 'react';

let txns:any;

const AlgoBlockData = (props:any) => {

    const [algoTxnData, setAlgoTxnData] = React.useState();

    React.useEffect(() => {
        const url = "https://algoindexer.algoexplorerapi.io/v2/blocks/" + props.round;
        fetch(url)
            .then((response) => response.json())
            .then((json) => setAlgoTxnData(json))
            .catch((error) => console.log(error)); 

        console.log(algoTxnData)
    },[]);

    React.useEffect(() => {
        if(algoTxnData) {
            const algotxns = algoTxnData["transactions"];
            txns = algotxns[0];
            
            console.log(txns);
            console.log(txns.sender);
            // let url2 = "https://algoindexer.algoexplorerapi.io/v2/blocks/" + algoRound;
            // fetch(url2)
            //     .then((response) => response.json())
            //     .then((json) => setAlgoRoundData(json))
            //     .catch((error) => console.log(error));
        }  
    },[algoTxnData]);

    // const txnSender = txns[0].sender;

    return (
        <React.Fragment>
            <div>
                <h1>{props.round}</h1>
                {/* <p>{txnSender}</p> */}
            </div>
        </React.Fragment>        
    );
};

export default AlgoBlockData