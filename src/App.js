import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Profile from './components/content/profile';
import Dialog from "./components/content/dialog/dialog";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className='content'>
                    <Route path='/profile'  render={ () => <Profile  posts={props.posts}/>}/>
                    <Route path='/dialog'  render={ () => <Dialog  users={props.users} dialogs={props.dialogs} /> }/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
};
export default App;
