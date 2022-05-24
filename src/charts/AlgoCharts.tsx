import React from 'react';
import AlgoBlockData from './AlgoBlockData';

let url = "https://algoindexer.algoexplorerapi.io/v2/health";

const AlgoCharts = () => {

    return (
        <React.Fragment>
            <h1>Welcome to React Algo Charts!</h1>
            <div>
                <AlgoBlockData />
            </div>
        </React.Fragment>
    );
};

export default AlgoCharts