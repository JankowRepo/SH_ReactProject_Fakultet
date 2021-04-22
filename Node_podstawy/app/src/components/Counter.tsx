import React from "react";
import '../App.css';
import BOnClick from "./BOnClick";
import {equal} from "assert";

interface CounterProps{
    initialNumber?: number
    onNumberChange?: (someNumber: number)=>void;
}

const Counter: React.FC<CounterProps> = ({initialNumber,onNumberChange}) => {
    const [counterNumber, setCounterNumber]=React.useState(initialNumber || 0);

    const setDefaultValue = () => {
        const number = 5;
        setCounterNumber(number);
        onNumberChange && onNumberChange(number);
    }

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
            <div>
                <BOnClick content="Reset" click={setDefaultValue} />
            </div>
            <BOnClick content="Zmniejsz liczbę o 1" click={decraseNumber}>-</BOnClick>
            <p/>
            {counterNumber}
            <p/>
            <BOnClick content="Zwiększ liczbę o 1" click={addNumber}>+</BOnClick>
        </div>
    );
}
export default Counter;


