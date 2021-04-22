import logo from "../logo.svg";
import React from "react";
// const CustomerHeader = () => {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo"/>
//                 <p>
//                     Edit <code>src/App.tsx</code> and save to reload.
//                 </p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }
const CustomerHeader: React.FC = ({children}) => {
    return (
        <div>
            <h1>Edytuj liczbę</h1>
            {children}
        </div>
    );
};

export const addNumber=(a: number,b: number)=>{
    return a+b
}

export default CustomerHeader;