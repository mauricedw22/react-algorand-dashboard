import React from 'react';
import AlgoBlockData from './AlgoBlockData';

const AlgoCharts = () => {

    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const url = "https://algoindexer.algoexplorerapi.io/health";
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.log(error)); 
    },[]);

    React.useEffect(() => {
        if(data.length !==0) {
            setIsLoading(false);
        }
        console.log(data);
    },[data]);

    return (
        <React.Fragment>
            <h1>Welcome to React Algo Charts!</h1>
            <div>
                {isLoading ? (
                        <h1>Loading...</h1>
                    ): (
                        <AlgoBlockData {...data} />
                    )
                }              
            </div>            
        </React.Fragment>
    );
};

export default AlgoCharts