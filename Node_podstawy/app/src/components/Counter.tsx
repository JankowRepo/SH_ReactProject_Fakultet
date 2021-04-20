import React from "react";
import '../App.css';
import {equal} from "assert";

interface CounterProps{
    initialNumber?: number
    onNumberChange?: (someNumber: number)=>void;
}

const Counter: React.FC<CounterProps> = ({initialNumber,onNumberChange}) => {
    const [counterNumber, setCounterNumber]=React.useState(initialNumber || 0);
    const addNumber=()=>{
        const number= counterNumber+1
        setCounterNumber(number);
        // if(onNumberChange){
        //     onNumberChange(number)
        // } is equal to:
        onNumberChange && onNumberChange(number);
    }
    const decraseNumber=()=>{
        const number= counterNumber-1
        setCounterNumber(number);
        onNumberChange && onNumberChange(number);
    }
    return (
        <div className="App">
            <button onClick={decraseNumber}>+</button>
            {counterNumber}
            <button onClick={addNumber}>+</button>
        </div>
    );
}


export default Counter;