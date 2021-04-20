import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomHeader, {addNumber} from './components/CustomHeader'
import Counter from "./components/Counter";

const App=() =>{
    const newNumber=addNumber(1,2);
    const [changeNumber, setChangeNumber]=React.useState(0);

    const handleNumberChange=(newNumber:number)=>{
        setChangeNumber(newNumber)
    }

    const liczbaMniejszaOdZera=(liczba: number)=> {
        if(liczba<0)
        {
            return (<div>Liczba jest mniejsza niz 0 </div>)
        }

    }

    return (
        <div className="App">
            <CustomHeader>
                <Counter onNumberChange={handleNumberChange} />
                {
                    changeNumber > 0 && (<div>Liczba jest większa niz 0</div>)
                }
                {liczbaMniejszaOdZera(changeNumber)}
            </CustomHeader>

        </div>
    );
}

export default App;
