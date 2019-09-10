import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Profile from './components/content/profile';
import Messages from "./components/content/messages/messages";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Route path='/profile'  component={Profile}/>
                <Route path='/messages'  component={Messages}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
};
export default App;
