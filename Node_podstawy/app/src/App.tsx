import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";

import Movie from './views/movie/Movie';
import Home from './views/home/Home';
import Page404 from "./views/404page/Page404";

import './App.css';

const App=()=>{
    return (
        <div className={"App"}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/movie/:id" component={Movie} />
                    <Route path="*" component={Page404} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App