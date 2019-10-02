import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Profile from './components/content/profile';
import Dialog from "./components/content/dialog/dialog";
import {BrowserRouter, Route} from "react-router-dom";
import {addNewPost} from "./redux/state";

const App = (props) => {
    return (
        <div className="App">
            <Header/>
            <div className='content'>
                <Route path='/profile'
                       render={() => <Profile addNewPost={props.addNewPost} posts={props.appState.postsPage.posts}/>}/>
                <Route path='/dialog' render={() => <Dialog users={props.appState.messagesPage.users}
                                                            dialogs={props.appState.messagesPage.dialogs}/>}/>
            </div>
            <Footer/>
        </div>
    )
};
export default App;
