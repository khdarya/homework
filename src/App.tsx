import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {HashRouter, Route} from "react-router-dom";
import PreJunior from "./Components/PreJunior";
import Navbar from './Components/Navbar/Navbar'
import Junior from "./Components/Junior";
import JuniorPlus from "./Components/JuniorPlus";



const App = () => {
    return (
        <div>
<HashRouter>
    <Navbar />
    <div>
        <Route path='/prejunior' render={() => <PreJunior />}/>
        <Route path='/junior' render={() => <Junior />}/>
        <Route path='/junior+' render={() => <JuniorPlus />}/>

    </div>
</HashRouter>
        </div>
    );
}

export default App;


