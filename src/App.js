import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Profile from './components/content/profile';
import Dialog from "./components/content/dialog/dialog";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className='content'>
                    <Route path='/profile'  component={Profile}/>
                    <Route path='/dialog'  component={ Dialog}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
};
export default App;
