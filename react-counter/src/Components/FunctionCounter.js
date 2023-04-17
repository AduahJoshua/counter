import React,{useState} from 'react';

const FunctionCounter = () => {
    const [Count, setCount] =useState("0")

        function handleIncrement(){
            setCount( Count + 2);
        }
        function handleDecrement(){
            setCount(Count - 2);
        }
    return (
        <div style={{textAlign: "center"}}>
            <h1>Count : {Count}</h1>
            <button onClick={handleIncrement}>Increase Count</button>
        <button onClick={handleDecrement}> Decrease Count</button>
        </div>
    );
}

export default FunctionCounter;
