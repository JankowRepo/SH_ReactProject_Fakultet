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

    const lookAtNumber = (number: number) => {
        if (number > 10 && number<=15)
        {
            return "Liczba jest wieksza od 10";
        }
        else if (number < -10)
        {
            return "Liczba jest mniejsza od -10";
        }
        else if (number > 15)
        {
            return "Liczba przekroczona";
        }
        else
            return "";
    }

    return (
        <div className="App">
            <CustomHeader>
                <Counter initialNumber={5} onNumberChange={handleNumberChange} />
                {
                    //changeNumber > 0 && (<div>Liczba jest większa niz 0</div>)
                }
                {
                    //changeNumber == 0 && (<div>Liczba jest równa 0</div>)}
                }
                {
                    //liczbaMniejszaOdZera(changeNumber)}
                }
                {
                    lookAtNumber(changeNumber)
                }
            </CustomHeader>
        </div>
    );
}

export default App;
