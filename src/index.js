import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import profilePic from "./images/profilePic.jpg";
import image from "./images/profilePic.jpg";


const users = [{
        id: '1',
        image: profilePic,
        name: 'Jany Doe',
        message: 'Hello how are ...',
        msgCount: '3',
    },
    {
        id: '2',
        image: profilePic,
        name: 'Anny Fabacher',
        message: 'Hello whats up...',
        msgCount: '1'
    },
    {
        id: '3',
        image: profilePic,
        name: 'Jhon Snow',
        message: 'Hi guys...',
        msgCount: '2'
    },
];
const dialogs = [{
        id: '1',
        message: 'Hello how are you, please can you tell me what it is, I can not understand it',
        image: profilePic,
    },
    {
        id: '2',
        message: 'Hi I am fine and you?',
        image: profilePic,
    },
    {
        id: '3',
        message: 'Me too, how is going your job in the office?',
        image: profilePic,
    }
];
const posts = [{
        id: '1',
        name: 'Jhon Doe',
        desc: 'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a',
        image: image,
    },
    {
        id: '2',
        name: 'Eduard Snow',
        desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        image: image,
    },
    {
        id: '3',
        name: 'Thom Doe',
        desc: 'Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image: image,
    },
]


ReactDOM.render( <App  dialogs={dialogs}  users={users} posts={posts}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
